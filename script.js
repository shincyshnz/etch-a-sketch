
function makeBoard(size = 16) {

    /*---if canvas already have squares then clear the canvas----*/
    let squares = document.querySelectorAll('.square-div');
    squares.forEach(div => div.remove());

    /*-----create squares--eg: 16X16-------------*/
    canvasDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    canvasDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let dimension = size * size;
    for (let i = 0; i < dimension; i++) {
        let square = document.createElement('div');
        square.classList.add('square-div');
        square.style.border = "solid 1px lightgrey";
        /* ---- color the square when mouse is placed over it */
        square.addEventListener('mouseover', colorChange);
        canvasDiv.insertAdjacentElement("beforeend", square);
    }
}

function colorChange(e) {
    if (squareBgColor === 'random') {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    } else {
        e.target.style.backgroundColor = squareBgColor;
    }
}

const canvasDiv = document.querySelector('.right');
const slider = document.querySelector('#slider');
const sliderLabel = document.querySelector('.range-values');
const colorPicker = document.querySelector('#colorPicker');
const randomButton = document.querySelector('.random');
const clearButton = document.querySelector('.clear');
const eraserButton = document.querySelector('.eraser');


let sliderValue = 16;
let squareBgColor = "#000000";
let click = true;

/*---------------------slider value-----------------*/
sliderLabel.textContent = `Size: ${sliderValue}X${sliderValue}`;
slider.addEventListener('change', e => {
    sliderValue = e.target.value;
    sliderLabel.textContent = `Size: ${sliderValue}X${sliderValue}`;
    makeBoard(sliderValue);
});

/*-----Pick your favorite color for grid----------------*/
colorPicker.addEventListener('change', (e) => {
    squareBgColor = e.target.value;
});

/*-----Pick random color for grid-----------------*/
randomButton.addEventListener('click', (e) => {
    squareBgColor = "random";
    eraserButton.style.backgroundColor = 'rgb(202, 227, 241)';
    clearButton.style.backgroundColor = 'rgb(202, 227, 241)';
    randomButton.style.backgroundColor = 'rgb(46, 113, 152)';
});

/*-----Erase only the selected square-----------------*/
eraserButton.addEventListener('click', (e) => {
    squareBgColor = "#FFFFFF";
    clearButton.style.backgroundColor = 'rgb(202, 227, 241)';
    randomButton.style.backgroundColor = 'rgb(202, 227, 241)';
    eraserButton.style.backgroundColor = 'rgb(46, 113, 152)';
});

/*-----clear the board-----------------*/
clearButton.addEventListener('click', (e) => {
    let squares = document.querySelectorAll('.square-div');
    squares.forEach(square => square.style.backgroundColor = 'white');
    randomButton.style.backgroundColor = 'rgb(202, 227, 241)';
    eraserButton.style.backgroundColor = 'rgb(202, 227, 241)';
    clearButton.style.backgroundColor = 'rgb(46, 113, 152)';

});



document.onload = makeBoard();