

function makeBoard(size = 2) {
    /*---if canvas already have squares then clear the canvas----*/

    let squares = document.querySelectorAll('.square-div');
    squares.forEach(div => div.remove());

    /*-----create squares--eg: 16X16-------------*/

    canvasDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    canvasDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square-div');
        square.style.border = "solid 1px lightgrey";
        /* ---- color the square when mouse is placed over it */

        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        })

        canvasDiv.insertAdjacentElement("beforeend", square);
    }
}


const canvasDiv = document.querySelector('.right');
const slider = document.querySelector('#slider');
const sliderLabel = document.querySelector('.range-values');

let sliderValue = 2;

sliderLabel.textContent = `${sliderValue}X${sliderValue}`;

slider.addEventListener('change', e => {
    sliderValue = e.target.value;
    sliderLabel.textContent = `${sliderValue}X${sliderValue}`;
    makeBoard(sliderValue);
});


makeBoard();