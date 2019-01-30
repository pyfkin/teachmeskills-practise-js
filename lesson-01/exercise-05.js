// Exercise 05: Write a JavaScript program that will return 1 if the array is sorted in ascending order, -1
// if it is sorted in descending order or 0 if it is not sorted.

const isSorted = (arr) => {
  // Solution here...
    let asc = 0, desc = 0;
  for (let i = 0; i < arr.length; i++){
     if (arr[i] <=  arr[i+1]){
         asc++;
     } else if(arr[i] >= arr[i+1]){
         desc++;
     }
  }
  console.log(`${asc} , ${desc}`);
  if (asc === arr.length - 1 && desc === 0) return 1;
    else if (desc === arr.length - 1 && asc === 0) return -1;
    else return 0;
  };
