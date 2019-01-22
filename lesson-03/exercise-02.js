// Exercise 02: Write a JavaScript program to compute the sum of an array of integers.
// (Note: you need to use recursion in the solution!!)
const sumIntegers = (number) => {
  // Solution here...

    if (number.length !== 0){
        return number[0] += sumIntegers(number.slice(1));

    } else return 0;

};