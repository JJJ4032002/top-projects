// this function creates the grid
const addGrid = () => {
    const gridXY = gridDimensions;
    for (let i = 1; i < gridXY + 1; i++) { // ros
        const rowDiv = document.createElement('div'); // new div to put box div. each a flex item
        rowDiv.classList.add('rows');
        rowDiv.setAttribute('style', 'display:flex;');
        for (let j = 1; j < gridXY + 1; j++) {
            const thisDiv = document.createElement('div');
            thisDiv.classList.add('box');
            // thisDiv.innerText = i
            let col1 = 0;
            let col2 = 0;
            let col3 = 0;
            [col1, col2, col3] = color(); // destructuring
            thisDiv.setAttribute('style', `
                background: rgba(208, 217, 199, 0.95);
                color:black;
                border: 1px solid black;
            `);
            rowDiv.appendChild(thisDiv); // append each loop div to rowdiv
        }
        divContainer.appendChild(rowDiv); // append final rowDiv to the divContainer
    }
};

// this function returns a list of 3 values(0-255); can be used to randomize the colors
const color = () => {
    const colorDiv = [];

    for (let j = 0; j <= 2; j++) {
        // set to white
        const colorValue = 'blue';

        colorDiv.push(colorValue);
    }
    return colorDiv;
};

// this function changes the background color of the element that has been passed in
const changeColor = (elementIn) => {
    const col1 = Math.floor(Math.random() * 255);
    const col2 = Math.floor(Math.random() * 255);
    const col3 = Math.floor(Math.random() * 255);
    // rainbow color style
    elementIn.style.backgroundColor = `rgba(${col1},${col3}, ${col2}, 0.95)`;
};

// eventListener on each button
const addHoverListener = function () {
    boxDiv.forEach((myElement) => {
        myElement.addEventListener('mouseover', () => {
            changeColor(myElement);
        });
    });
};

//
const removeGrid = () => {
    const boxContainer = document.querySelectorAll('.rows');
    for (let i = 0; i < boxContainer.length; i++) {
        divContainer.removeChild(boxContainer[i]);
    }
};

// variable initialization
let gridDimensions = 16;
const divContainer = document.querySelector('.squareGrid');

const btnGrid = document.querySelector('#buttonGrid');
btnGrid.addEventListener('click', () => {
    const gridNum = prompt('Enter a value');
    gridDimensions = parseInt(gridNum);
    removeGrid();
    addGrid();
    boxDiv = document.querySelectorAll('.box');
    addHoverListener();
});

addGrid();

// order matters. boxDiv can only be declared after addGrid
let boxDiv = document.querySelectorAll('.box');

// order matters. this can only be run after addGrid
addHoverListener();
