// Exercise 01: Write a JavaScript program to calculate the factorial of a number.

const factorial = (number) => {
  // Solution here...
   if (number  > 1) {
        return factorial(number-1) * number;
    } else return 1;

};