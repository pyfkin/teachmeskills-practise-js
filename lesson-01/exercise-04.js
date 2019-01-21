// Exercise 04: Write a JavaScript program to calculate how many numbers in the given array are less or equal to the given value in percents.

const calcNumbers = (arr, val) => {
  // Solution here...
    let count = 0;
    arr.forEach((arrItem) =>{
        if (arrItem <= val)
            count++;
    });
    return (count / arr.length) * 100;
};