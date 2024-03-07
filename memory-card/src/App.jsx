import {useState, useEffect} from "react";
import "./App.css";
import {heroesEndpoint} from "./Heroes.js";
import HeroCard from "./components/HeroCard.jsx";
import Header from "./components/Header.jsx";

function App() {
    const [isLoading, setLoading] = useState(true);
    const [heroes, setHeroes] = useState([]);

    // toDo: add a state for the current score and best score, shuffle on click and keep track of score
    // score is determined by number of unique heroes clicked in a row. If a hero is clicked twice, the score resets to 0
    // and the best score is updated if the current score is higher than the best score

    useEffect(() => {
        const fetchHeroes = async () => {
            setLoading(true);
            const heroLibrary = await heroesEndpoint();
            console.log("Main app heroes: ", heroLibrary);
            setHeroes([...heroes, ...heroLibrary]);
            setLoading(false)
        };

        fetchHeroes();
    }, []);

    // test123
    // moreTests

    return (<>
        <Header currentScore={0} bestScore={12}></Header>
        <HeroCard heroes={heroes} loadingState={isLoading}></HeroCard>
    </>);
}

export default App;
