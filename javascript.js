
function sketch() {
    if (document.querySelectorAll('.individual-square').length !== 0) {
        existingSquares = document.querySelectorAll('.individual-square');
        console.log(existingSquares);
        existingSquares.forEach(function (square) {
            square.remove();
        });
    }
    let userInput = prompt('How many squares per side? 100 max');
    if (userInput > 100) {
        alert('Maximum is 100 squares per side');
        console.log(userInput);
        return;
    } else {
        console.log(userInput);
        makeGrid(userInput);
    }
}

function pickRandomColor() {
    let rValue = Math.floor(Math.random() * 255);
    let gValue = Math.floor(Math.random() * 255);
    let bValue = Math.floor(Math.random() * 255);
    let randomColor = 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')';
    return randomColor;
}


function makeGrid(userGridWidth) {
    let outerContainer16 = document.getElementById('outer-container-16');

    // let userGridWidth = 10; //this will come from input limit to 100
    let totalSquares = userGridWidth * userGridWidth;
    let individualSquareWidth = 960 / userGridWidth;
    for (i = 0; i < totalSquares; i++) {
        let individualSquare = document.createElement('div');
        individualSquare.classList.add('individual-square');
        individualSquare.style.width = individualSquareWidth + 'px';
        individualSquare.style.height = individualSquareWidth + 'px';
        individualSquare.style.flexBasis = 100 / userGridWidth + '%';
        individualSquare.addEventListener('mouseover', function handleMouseOver() {
            individualSquare.style.background = pickRandomColor();
        });
        outerContainer16.appendChild(individualSquare);
    }
}
let userGridWidthInputButton = document.getElementById('user-grid-width-input');
console.log(userGridWidthInputButton);
userGridWidthInputButton.addEventListener('click', sketch);
