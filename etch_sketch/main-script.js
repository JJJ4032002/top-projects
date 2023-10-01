// this function creates the grid
const addElements = () => {
    let gridXY = gridDimensions;
    for (let i = 1; i < gridXY + 1; i++) { //ros
        let rowDiv = document.createElement('div')  //new div to put box div. each a flex item
        rowDiv.classList.add(`row-${gridDimensions}`)
        rowDiv.setAttribute('style', 'display:flex;')
        for (let j = 1; j < gridXY + 1; j++) {
            let thisDiv = document.createElement('div');
            thisDiv.classList.add('box');
            // thisDiv.innerText = i
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

// eventListener on each button
const addHoverListner = function () {
    boxDiv.forEach((myElement) => {
        myElement.addEventListener("mouseover", () => {
            changeColor(myElement)
        })
    });
};

// 
const removeGrid = () => {
    const boxContainer = document.querySelectorAll('.row-16');
    for (let i = 0; i < boxContainer.length; i++) {
        divContainer.removeChild(boxContainer[i])
    }
}

// variable initialization
let gridDimensions = 16;
const divContainer  = document.querySelector('.squareGrid');

const btnGrid = document.querySelector('#buttonGrid')
btnGrid.addEventListener('click', () => {
    let gridNum = prompt("Enter a value")
    gridDimensions = parseInt(gridNum)
    removeGrid()
    addElements()
});

addElements();

// order matters. boxDiv can only be declared after addElements
const boxDiv = document.querySelectorAll('.box');

// order matters. this can only be run after addElements
addHoverListner()
