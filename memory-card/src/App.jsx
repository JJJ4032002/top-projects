import { useState, useEffect } from "react";
import "./App.css";
import { getHeroLibrary } from "./Heroes.js";

function App() {
    const [heroes, setHeroes] = useState([{name:'Lyton', heroId:123}]);

    useEffect(() => {
        setHeroes(getHeroLibrary);
    }, []);

    console.log("Look, the heroes:" , heroes);

    return (
        <>
            <h2>Galaxy Heroes</h2>
            {heroes.map((hero, index) => {
                <li key={hero.heroId}>{hero.name}</li>;
            })}
        </>
    );
}

export default App;
