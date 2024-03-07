import './HeroCard.css'

function HeroCard({heroes, loadingState}) {

    const renderContent = () => {
        if (loadingState) {
            return <div>...assembling the avengers</div>;
        }

        if (Array.isArray(heroes) && heroes.length > 0) {
            return (
                heroes.map((hero, index) => {
                    return (
                        <div className={'heroCardDiv'} key={hero.id}>
                            <h2>{hero.name}</h2>
                            <img className={'heroImage'}
                                 src={hero.thumbnail.path + "/landscape_xlarge." + hero.thumbnail.extension}
                                 alt={"An image of the hero, " + hero.name}
                            />
                        </div>
                    )
                })

            );
        }

        return <p>Avengers are busy at the moment :-/</p>;
    }

    console.log("ohh, heroes: ", heroes[0])
    console.log("Current loading state: ", loadingState)

    return (<>
        <>
            <div className={'heroCardsContainer'}>
                {renderContent()}
            </div>

        </>

    </>)
}

export default HeroCard;