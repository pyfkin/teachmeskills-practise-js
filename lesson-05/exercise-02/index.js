// Exercise 02
// Write a JavaScript function to get the values of First and Last name of the following form and show them in the alert

function getFormvalue(){
    alert('asd');
    // e.preventDefault();

    let input = document.querySelectorAll('#form1 input');
    alert(input[0].value + ' ' + input[1].value);
}