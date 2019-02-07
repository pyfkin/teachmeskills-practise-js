// Exercise 03
// Write a JavaScript function to add rows to a table.
// 'use strict';
let table = document.querySelector('#sampleTable');
let tr = document.querySelector('template').content.querySelector('tr');
let a = 5;
function insert_Row()
{
    for (let i = 0; i < 3; i++) {
        let tr1 = tr.cloneNode(true);
        // td1.innerHTML = i;
        tr1.querySelectorAll('td')[0].textContent = i;
        tr1.querySelectorAll('td')[1].textContent = 'q';
        table.appendChild(tr1);
    }

    table.appendChild(tr);

}