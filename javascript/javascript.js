const container = document.querySelector('.container')

for (let i = 1; i <= 16; i++) {
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'gridContainer');
    container.appendChild(gridContainer);
    for (let j = 1; j <= 16; j++) {
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