import {useState, useEffect} from "react";
import "./App.css";
import {heroesEndpoint} from "./Heroes.js";
import HeroCard from "./components/HeroCard.jsx";
import Header from "./components/Header.jsx";
import heroShuffler from "./HeroShuffler.js";
import GameIntroModal from "./components/GameIntroModal.jsx";

function App() {
    const [numApiCalls, setCalls] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setLoading] = useState(true);
    const [heroes, setHeroes] = useState([]);
    const [clickedHeroes, setClickedHeroes] = useState(new Set());
    const [bestScore, setBestScore] = useState(0);
    const [currScore, setCurrScore] = useState(0);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () =>setIsModalOpen(false);

    // toDo: add a state for the current score and best score, shuffle on click and keep track of score
    // score is determined by number of unique heroes clicked in a row. If a hero is clicked twice, the score resets to 0
    // and the best score is updated if the current score is higher than the best score

    useEffect(() => {
        const fetchHeroes = async () => {
            setLoading(true);
            const heroLibrary = await heroesEndpoint();
            console.log("Main app heroes: ", heroLibrary);
            setCalls(numApiCalls+1);
            console.log("We have made this many api calls: ", numApiCalls)
            setHeroes(heroShuffler([...heroes, ...heroLibrary]));
            setLoading(false)
        };

        fetchHeroes();
        console.log("calls: ",numApiCalls)
    }, []);

    const handleHeroClick = (heroId) =>{

        if (clickedHeroes.has(heroId)){
            setCurrScore(0)
            setClickedHeroes(new Set())
        }else {
            setCurrScore(currScore+1);
            setBestScore(Math.max(bestScore, currScore+1));
            setClickedHeroes(new Set().add(heroId))
        }
        setHeroes(heroShuffler(heroes))
    }

    return (<>
        <Header currentScore={currScore} bestScore={bestScore}></Header>
        <h2 onClick={openModal}>Open Modal</h2>
        {isModalOpen && <GameIntroModal onClose={closeModal}></GameIntroModal>}
        <HeroCard heroes={heroes} loadingState={isLoading} onClickHandler={handleHeroClick}></HeroCard>
    </>);
}

export default App;
