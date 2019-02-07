// Homework
// Implement JS application in order to be able to move active cell item around with the keyboard. Letters: a, s, d, w.


const rows = 10,
    cols = 10,
    cell = {
        i: 0,
        j: 0
    },
    cells = [];

function createGrid(root)
{
    let tbl  = document.createElement('table');
    tbl.style.borderCollapse = 'collapse';

    for(let i = 0; i < rows; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < cols; j++){
            let td = tr.insertCell();
            td.style.border = '1px solid black';
            td.style.width  = '30px';
            td.style.height = '30px';
        }
    }
    root.appendChild(tbl);

}

function moveDown() {
    if (cell.i !== 9){
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        table.rows[++cell.i].cells[cell.j].classList.toggle('activeCell');
    } else if (cell.j !== 9) {
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        cell.i = 0;
        table.rows[cell.i].cells[++cell.j].classList.toggle('activeCell');
    } else {
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        cell.i = 0;
        cell.j = 0;
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
    }
}

function moveLeft() {
    if (cell.j !== 0){
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        table.rows[cell.i].cells[--cell.j].classList.toggle('activeCell');
    } else if (cell.i !== 0){
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        cell.j = 9;
        table.rows[--cell.i].cells[cell.j].classList.toggle('activeCell');
    } else {
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        cell.i = 9;
        cell.j = 9;
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
    }
}

function moveRight() {
    if (cell.j !== 9){
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        table.rows[cell.i].cells[++cell.j].classList.toggle('activeCell');
    } else if (cell.i !== 9){
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        cell.j = 0;
        table.rows[++cell.i].cells[cell.j].classList.toggle('activeCell');
    } else {
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        cell.i = 0;
        cell.j = 0;
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
    }
}

function moveUp() {
    if (cell.i !== 0){
        table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        table.rows[--cell.i].cells[cell.j].classList.toggle('activeCell');
    } else if (cell.j !== 0) {
    table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
    cell.i = 9;
    table.rows[cell.i].cells[--cell.j].classList.toggle('activeCell');
} else {
    table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
    cell.i = 9;
    cell.j = 9;
    table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
}
}

const moves = {
    '1092': moveLeft,
    '1099': moveDown,
    '1094': moveUp,
    '1074': moveRight,
    '97'  : moveLeft,
    '115' : moveDown,
    '119' : moveUp,
    '100' : moveRight
};

const root = document.getElementById('container');
createGrid(root);
let table = document.querySelector('#container table');
table.rows[0].cells[0].classList.toggle('activeCell');

document.body.addEventListener('keypress', (e) => {
    moves[e.keyCode]();
});

table.addEventListener('mousedown', function (e)
{
    e.stopPropagation();
    e.preventDefault();
    table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
    cell.i = e.target.parentElement.rowIndex;
    cell.j = e.target.cellIndex;
    e.target.classList.toggle('activeCell');

});