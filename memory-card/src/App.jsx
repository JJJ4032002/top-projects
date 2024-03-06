import { useState, useEffect } from "react";
import "./App.css";
import { getHeroLibrary } from "./Heroes.js";

function App() {
    const [heroes, setHeroes] = useState([{ name: "My first hero", heroId: 1223 }]);

    useEffect(() => {
        // infinte loop
        // setHeroes([...heroes, ...getHeroLibrary()]);

        setHeroes(...heroes, ...getHeroLibrary());
    }, [heroes]);

    console.log("Look, the heroes(b4 return):", heroes);

    return (
        <>
            <h2>Galaxy Heroes</h2>
            <ul>
                {heroes.map((hero, index) => {
                    return <li key={hero.heroId}>{hero.name}</li>;
                })}
            </ul>
        </>
    );
}

export default App;
