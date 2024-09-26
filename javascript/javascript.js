const container = document.querySelector('.container')


function createGrid(numberOfSqrs = 16) {
    for (let i = 1; i <= numberOfSqrs; i++) {
        const gridContainer = document.createElement('div');
        gridContainer.setAttribute('class', 'gridContainer');
        container.appendChild(gridContainer);
        for (let j = 1; j <= numberOfSqrs; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'gridSquare');
            gridContainer.appendChild(div);
        }
    }

    const squares = document.querySelectorAll('.gridSquare');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hoveredSquare');
        })
    })
}

function deleteGrid() {
    const gridContainers = document.querySelectorAll('.gridContainer');
    gridContainers.forEach((gridContainer) => {
        gridContainer.remove();
    })
}

const resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click', () => {
    const getNewGridSize = +prompt('How many squares would you like per side?');
    if (getNewGridSize <= 100) {
        deleteGrid();
        createGrid(getNewGridSize);
    }
})

createGrid();