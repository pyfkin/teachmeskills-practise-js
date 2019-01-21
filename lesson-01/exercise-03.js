// Exercise 03: Write a JavaScript program to sort the characters of a string Alphabetically.

// const sortAlph = (str) => {
//   // Solution here...
//     console.log(str.split('').sort(function (a, b) {
//         return a < b;
//         }).join(''));
// };

const sortAlph = (str) => {
    let stringArray = str.split('');
    return stringArray.sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    }).join('');

};