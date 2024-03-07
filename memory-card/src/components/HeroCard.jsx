function HeroCard(heroes) {

    console.log("ohh, heroes: ", heroes)

    return (
        <>
            {/*<h2>{hero.name}</h2>*/}
            {/*<img src={heroImageUrl} alt={"An image of" + heroName}/>*/}
            { heroes !== null && <h2>{"Num 1 is " + heroes}</h2>}
        </>
    )
}

export default HeroCard;