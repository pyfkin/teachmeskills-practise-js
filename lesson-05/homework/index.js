// Homework
// Implement JS application in order to be able to move active cell item around with the keyboard. Letters: a, s, d, w.


const rows = 10,
      cols = 10,
      cells = [];

function createGrid(root)
{
    for (let i = 0; i < rows; i++) {
        cells[i] = [];
        for (let j = 0; j < cols; j++) {
            cells[i][j] = '_';
        }
    }
    cells[0][0] = '0';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            root.innerHTML += `${cells[i][j]} `;
        }
        root.innerText += '\n';
    }


    console.log(cells);

}

function moveDown() {

}

function moveLeft() {

}

function moveRight() {

}

function moveUp() {

}

const moves = {
  '97': moveLeft,
  '115': moveDown,
  '119': moveUp,
  '100': moveRight
};

const root = document.getElementById('container');
createGrid(root);

document.body.addEventListener('keypress', (e) => {
  moves[e.keyCode]();
});