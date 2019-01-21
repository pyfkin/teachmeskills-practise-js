// Exercise 07: Create function generator to iterate given array.
function *arrayIterator(arr) {
  // Solution here...
    let i = 0;

    for (let a of arr){
        yield `${i}-ый элемент массива = ${a}`;
        i++;
    }

}

var numbers = arrayIterator([1,2,3,4,5]); // возвращает перебираемый объект

console.log(numbers.next().value);