// Homework
// Implement JS application in order to be able to move active cell item around with the keyboard. Letters: a, s, d, w.

import './style.css';
class App {

    constructor() {
        this.rows = 10;
        this.cols = 10;
        this.cell = {
            i: 0,
            j: 0
        };

        this.moves = {
            '65': this._moveLeft,
            '83': this._moveDown,
            '87': this._moveUp,
            '68': this._moveRight,
            '97': this._moveLeft,
            '115': this._moveDown,
            '119': this._moveUp,
            '100': this._moveRight
        };

        this.root = document.querySelector('.container');


    }

    run(){
        // this._createGrid(this.root);


        let tbl  = document.createElement('table');
        tbl.style.borderCollapse = 'collapse';

        for(let i = 0; i < this.rows; i++){
            let tr = tbl.insertRow();
            for(let j = 0; j < this.cols; j++){
                let td = tr.insertCell();
                td.style.border = '1px solid black';
                td.style.width  = '30px';
                td.style.height = '30px';
            }
        }
        this.root.appendChild(tbl);

        tbl.rows[this.cell.i].cells[this.cell.j].classList.toggle('activeCell');

        tbl.addEventListener('mousedown',  (e) => {
            e.stopPropagation();
            e.preventDefault();
            tbl.rows[this.cell.i].cells[this.cell.j].classList.toggle('activeCell');
            this.cell.i = e.target.parentElement.rowIndex;
            this.cell.j = e.target.cellIndex;
            e.target.classList.toggle('activeCell');
        });

        document.body.addEventListener('keypress', (e) => {
            this.moves[e.keyCode](this.cell, tbl);
        });

    }

    _createGrid(root)
    {
        let tbl  = document.createElement('table');
        tbl.style.borderCollapse = 'collapse';

        for(let i = 0; i < this.rows; i++){
            let tr = tbl.insertRow();
            for(let j = 0; j < this.cols; j++){
                let td = tr.insertCell();
                td.style.border = '1px solid black';
                td.style.width  = '30px';
                td.style.height = '30px';
            }
        }
        root.appendChild(tbl);

    }

    _moveDown(cell, table)
    {
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

    _moveLeft(cell, table)
    {
        if (cell.j !== 0){
            table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
            table.rows[cell.i].cells[--cell.j].classList.toggle('activeCell');
        } else if (cell.i !== 0){
            table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
            cell.j = 9;
            table.rows[--cell.i].cells[cell.j].classList.toggle('activeCell');
        } else {
            table.rows[cell.i].cells[ cell.j].classList.toggle('activeCell');
            cell.i = 9;
            cell.j = 9;
            table.rows[cell.i].cells[cell.j].classList.toggle('activeCell');
        }
    }

    _moveRight(cell, table)
    {
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

    _moveUp(cell, table)
    {
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
}

let app = new App();
app.run();

