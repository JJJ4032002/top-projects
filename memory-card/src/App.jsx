import {useState, useEffect} from "react";
import "./App.css";
import {heroesEndpoint} from "./Heroes.js";
import HeroCard from "./components/HeroCard.jsx";

function App() {
    const [isLoading, setLoading] = useState(true);
    const [heroes, setHeroes] = useState([]);

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

    return (<>
        <div className={'Header'}>
            <h2>Marvel Galaxy Heroes</h2>
            <ul>
                <li>Current score:</li>
                <li>Best score🎯:</li>
            </ul>
        </div>
        <HeroCard heroes={heroes} loadingState={isLoading}></HeroCard>
    </>);
}

export default App;
