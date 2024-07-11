function generateRandomNumbers(max) {
    return Math.floor(Math.random() * max + 1);
}

function createSingleSquare(num sideNumber) {
    const square = document.createElement('div');
    square.classList.add('square');
    let sideLength = `calc(100% / ${sideNumber})`;
    square.style.width = sideLength;
    square.style.height = sideLength;
    square.innerText = num + 1;
    square.addEventListener('click', function () {
        this.classList.add('clicked');
        console.log(this.innerText);
    });
    return square;

}

function.generateGrid(cellsNumber, sideNumber) {
    const grid = document.getElementById('grid');
    for (let i = 0; i < cellsNumber; i++) {
        let item = createSingleSquare(i, sideNumber)
        grid.append(item);
    }
}

function createNewGame() {
    let bombs = [];
    let points = 0
    let gameOver = false;
    grid.innerHTML = '';
    generateGrid(100, 10);

}

const button = document.getElementById('play')
button.addEventListener('click', function () {
    createNewGame();
})