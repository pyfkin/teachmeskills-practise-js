// Exercise 01
// Clicking on the button the font, font size, and color of the paragraph text will be change randomly
//let targetNumber = Math.floor(Math.random() * 10) + 1;
let p = document.querySelector('#text');
let btn = document.querySelector('#jsstyle');

let _font = Math.floor(Math.random() * 255);

btn.addEventListener('click', function (e)
{
   e.preventDefault();
   p.style.fontSize = '22px';

});