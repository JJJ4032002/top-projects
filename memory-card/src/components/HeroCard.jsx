function HeroCard({heroes, loadingState}) {

    console.log("ohh, heroes: ", heroes[0])
    console.log("Current loading state: ", loadingState)

    return (
        <>
            {loadingState ?
                <div>
                    ...assembling the avengers
                </div> :
                (Array.isArray(heroes) && heroes.length > 1) ?
                    <h2>{"Num 1 is " + heroes[0].name}</h2> :
                    <p>Avengers are busy at the moment :-/</p>
            }

            {/*<h2>{hero.name}</h2>*/}
            {/*<img src={heroImageUrl} alt={"An image of" + heroName}/>*/}

        </>
    )
}

export default HeroCard;