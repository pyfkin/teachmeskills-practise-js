// Exercise 05: Create `Array.customFilter` method. It should work the same like `Array.filter` method.

// Solution here...


 Array.prototype.customFilter = function (func)
 {
     console.log(this.length);
     let mas = [];
     for (let i = 0; i  < this.length; i++){
             if (func(this[i])){
                 mas.push(this[i]);
             }

     }
     return mas;
 };

