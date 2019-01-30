// Exercise 05
// Write a JavaScript program to get the width and height of the window (any time the window is resized).

let div = document.querySelector('div#wh');
let w = document.querySelector('p#width');
let h = document.querySelector('p#height');


function getSize()
{
    let _div = getComputedStyle(div);
    w.innerHTML = _div.width;
    h.innerHTML = _div.height;

}