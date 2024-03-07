import { useState, useEffect } from "react";
import "./App.css";
import {heroesEndpoint} from "./Heroes.js";
import HeroCard from "./components/HeroCard.jsx";

function App() {
    const [isLoading, setLoading] = useState(true);
    const [heroes, setHeroes] = useState([]);

    useEffect( () => {
        const fetchHeroes = async () => {
            setLoading(true);
            const heroLibrary = await heroesEndpoint();
            console.log("Main app heroes: ", heroLibrary);
            setHeroes([...heroes, ...heroLibrary]);
            setLoading(false)
        };

        fetchHeroes();
    }, []);

    return (
        <>
            <h2>Galaxy Heroes</h2>
            <HeroCard heroes={ heroes } loadingState={isLoading}></HeroCard>

            {/*<ul>*/}
            {/*    {heroes.map((hero, index) => {*/}
            {/*        return <li key={hero.id}>{hero.name}</li>;*/}
            {/*    })}*/}
            {/*</ul>*/}
        </>
    );
}

export default App;
