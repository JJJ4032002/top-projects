import './HeroCard.css'

function HeroCard({heroes, loadingState, onClickHandler}) {

    const filteredHeroes = heroes.filter(
        hero => hero.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    );

    console.log(onClickHandler)

    console.log("Filtered heroes: ", filteredHeroes)

    const renderContent = () => {
        if (loadingState) {
            return <div>...assembling the avengers</div>;
        }
        if (Array.isArray(filteredHeroes) && filteredHeroes.length > 0) {
            return (
                <>
                    {filteredHeroes.map((hero) => {
                        return (
                            <div className={'heroCardDiv'} key={hero.id}
                                 onClick={(e) => {
                                     console.log("Clicked on hero: ", hero.name)
                                     onClickHandler(hero.id)
                                 }}
                            >
                                <h2>{hero.name}</h2>
                                <img className={'heroImage'}
                                     src={hero.thumbnail.path + "/landscape_xlarge." + hero.thumbnail.extension}
                                     alt={"An image of the hero, " + hero.name}
                                />
                            </div>
                        )
                    })}
                </>);
        }

        return <p>Avengers are busy at the moment :-/</p>;
    }

    console.log("ohh, my first hero: ", heroes[0])
    console.log("Current heroes: ", heroes)
    console.log("Current loading state: ", loadingState)

    return (

        <>
            {filteredHeroes.length > 0 && <h2 className={'heroCount'}>Showing {filteredHeroes.length} heroes</h2>}
            <div className={'heroCardsContainer'}>
                {renderContent()}
            </div>
        </>
    )
}

export default HeroCard;