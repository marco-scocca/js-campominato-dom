function generateRandomNumbers(max) {
    return Math.floor(Math.random() * max + 1);
}
function generateBombsList(nums, NUM_OF_BOMBS) {
    let bombslist = [];
    for (let i = 0; i < NUM_OF_BOMBS; i++) {
        while (condizione) {
            let num = generateRandomNumbers(nums);
            if (bombslist.includes(num) === false) {
                bombslist.push(num);
            }
        }
    }
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

    let points = 0
    let gameOver = false;
    const NUM_OF_BOMBS = 16;
    grid.innerHTML = '';
    const bombs = generateBombsList(100, NUM_OF_BOMBS);
    generateGrid(100, 10);

}

const button = document.getElementById('play')
button.addEventListener('click', function () {
    createNewGame();
})