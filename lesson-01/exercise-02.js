// Exercise 02: Write a JavaScript program to get removed elements of an given array until the passed function returns true.

// let newArr = [];
// const removeIfCondition = (arr, func) => {
//   // Solution here...
//     arr.forEach((item) => {
//         if (func(item) === true){
//             arr.pop();
//         }
//     });
//     return arr;
// };


const removeIfCondition = (arr, func) => {
    const newArr = [];
arr.forEach((arrayItem) => {
    if (func(arrayItem) !== true) {
        console.log(arrayItem);
        newArr.push(arrayItem);
    }
});
return newArr;
};