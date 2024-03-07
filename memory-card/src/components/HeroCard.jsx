function HeroCard({heroes, loadingState}) {

    const renderContent = () => {
        if (loadingState) {
            return <div>...assembling the avengers</div>;
        }

        if (Array.isArray(heroes) && heroes.length > 0) {
            return (
                <div>
                    <h2>{heroes[0].name}</h2>
                    <img src={heroes[0].thumbnail.path+"/landscape_xlarge."+heroes[0].thumbnail.extension}
                         alt={"An image of" + heroes[0].name}/>
                </div>

            );
        }

        return <p>Avengers are busy at the moment :-/</p>;
    }

    console.log("ohh, heroes: ", heroes[0])
    console.log("Current loading state: ", loadingState)

    return (<>
        <>
            {renderContent()}
        </>

    </>)
}

export default HeroCard;