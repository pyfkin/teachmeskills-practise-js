// Exercise 06: Create a function to generate a random digits from 1 to 10. It should have a timeout with 3 seconds.
// It should be wrapped into Promise. If a number from 1 to 5 - it should be resolved successfully.
// If a number from 6 to 10 - it should be resolved with error.

let randomNumber = function(){
    return Math.floor(Math.random()*11);
};

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let rn = randomNumber();
        if (rn >= 1 && rn <= 5) {
            resolve(`Random number ${rn}: successfully`);
        } else {
            reject(`Random number ${rn}: error`);
        }
    },0);

});

promise
    .then(
        (val) => console.log("Промис успешно выполнен. ", val),
        (err) => console.log("Промис выполнен с ошибкой. ", err));
console.log('asdf');