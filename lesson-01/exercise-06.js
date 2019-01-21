// Exercise 06: Create a function to generate a random digits from 1 to 10. It should have a timeout with 3 seconds.
// It should be wrapped into Promise. If a number from 1 to 5 - it should be resolved successfully.
// If a number from 6 to 10 - it should be resolved with error.

let randomNumber = function (){
    return Math.floor(Math.random()*11);
};


setTimeout(func, 3000);

let p = new Promise(function(randomNumber) {
    if (randomNumber >= 1 && randomNumber <= 5) {
        resolve(alert('successfully'));  // fulfilled successfully (успешный результат)
    } else {
        reject(alert('error'));  // rejected (ошибка)
    }
});

p();