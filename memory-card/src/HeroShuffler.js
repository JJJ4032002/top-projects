const HeroRandomizer = (arrIn) =>{
    for (let i = arrIn.length - 1; i > 0; i--){
        const randIndex = Math.floor(Math.random() * (i + 1));

        let temp = arrIn[i]
        arrIn[i] = arrIn[randIndex]
        arrIn[randIndex] = temp
    }
    return arrIn;
}

export default HeroRandomizer;