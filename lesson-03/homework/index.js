// Homework

//- Write the `init` function to set up an event listener on the form.
//          The event listener should pass the value of the input element to the `check` function.
//- Write the `check` function to accept a value from the event listener and check it against the `targetNumber`.
//- If the values match, call the `showWin` function
//- If the values do not match, call the `showError` function.
//- If the values do not match, and the player has made more than five guesses, call the `showLoss` function.
//- Write the `showWin` function to remove the form and any error message,
//          and show a message telling the player they win.
//- Write the `showError` function to show a message telling the player their guess is incorrect.
//- Write the `showLoss` function to remove the form and show a message telling the player they lose.


let targetNumber = Math.floor(Math.random() * 10) + 1;
let counter = 5;
let submitButtonClick = document.querySelector("form button");
let inputValue = document.querySelector("form input");
let form = document.querySelector("form");
let text = document.querySelector("p");

const init = () => {
    submitButtonClick.addEventListener("click", function (e)
    {
        e.preventDefault();
        check(inputValue.value);
    });
};

const check = (value) =>
{
    counter--;
    if (value == targetNumber) {
        showWin();
    } else if (value !== targetNumber) {
        if (counter == 0) {
            showLoss();
        } else {
            showError();
        }
    }
};

const showWin = () => {
    form.remove();
    text.innerText = "best of the best :)"
};

const showError = () => {
    text.innerText = `try one more time. still: ${counter}`;
};

const showLoss = () => {
    form.remove();
    text.innerText = "Bad news for you :("
};

init();
