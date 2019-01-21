// Exercise 01: Write a JavaScript program to convert a given string into an array of words.

const stringToArray = (str) => {
    let separated = str.split(/[^a-zA-Z]+/);
    return separated.filter((item) => {
        if (item) {
            console.log(item);
            return true;
        } else {
            console.log(item);
            return false;
        }
    });
}