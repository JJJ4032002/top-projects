const addElements = () => {
    for (let j = 0; j < 16; j++) {
        let rowDiv = document.createElement('div')  //new div to put box div. each a flex item
        rowDiv.classList.add(`row-${j}`)
        rowDiv.setAttribute('style', 'display:flex;')
        for (let i = 0; i < 16; i++) {

            let thisDiv = document.createElement('div');
            thisDiv.classList.add('box');
            let col1 = 0;
            let col2 = 0;
            let col3 = 0;
            [col1, col2, col3] = color();
            thisDiv.setAttribute('style', `
                background: rgba(${col1},${col3}, ${col2}, 0.95 );
                color:black;
                border: 2px solid black;
            `);
            // thisDiv.innerText = `${i + 1}`;

            rowDiv.appendChild(thisDiv);
        }
        divContainer.appendChild(rowDiv)
    }
    // console.log(divContainer);
}
const gridContainer = document.querySelectorAll('.squareGrid');
const divContainer = gridContainer[0];

const color = () => {
    let colorDiv = [];


    for (let j = 0; j <= 2; j++) {
        // set to white
        let colorValue = 120;

        // set to random color
        // let colorValue = Math.floor(Math.random() * 240);
        // while (colorValue < 120){
        //     ++colorValue
        // }

        colorDiv.push(colorValue);
    }
    return colorDiv;
}

const changeColor = (elementIn) => {
    // set to random color
    // let colorValue = Math.floor(Math.random() * 240);
    // while (colorValue < 120){
    //     ++colorValue
    // console.log(elementIn)
    elementIn.style = 'background: blue';
    
}


addElements()


const boxDiv = document.querySelectorAll('.box');


boxDiv.forEach((myElement) => {
    myElement.addEventListener("mouseover", () => {
        changeColor(myElement)
    })
});