// this function creates the grid
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
            [col1, col2, col3] = color(); // destructuring
            thisDiv.setAttribute('style', `
                background: rgba(${col1},${col3}, ${col2}, 0.95 );
                color:black;
                border: 2px solid black;
            `);
            rowDiv.appendChild(thisDiv); //append each loop div to rowdiv
        }
        divContainer.appendChild(rowDiv) //append final rowDiv to the divContainer
    }
}

// this function returns a list of 3 values(0-255); can be used to randomize the colors
const color = () => {
    let colorDiv = [];

    for (let j = 0; j <= 2; j++) {
        // set to white
        let colorValue = 255;

        colorDiv.push(colorValue);
    }
    return colorDiv;
}

// this function changes the background color of the element that has been passed in
const changeColor = (elementIn) => {
    elementIn.style.backgroundColor = 'blue';

}

// variable initialization
const gridContainer = document.querySelectorAll('.squareGrid');
const divContainer = gridContainer[0];

addElements()
// order matters. boxDiv can only be declared after addElements
const boxDiv = document.querySelectorAll('.box');

// eventListener on each button
boxDiv.forEach((myElement) => {
    myElement.addEventListener("mouseover", () => {
        changeColor(myElement)
    })
});

const btnGrid = document.querySelector('#buttonGrid')

btnGrid.addEventListener('click', () => {
    let gridNum = prompt("Enter a value")
    console.log(gridNum)
});
