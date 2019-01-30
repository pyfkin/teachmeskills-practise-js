// Exercise 01:
// Fix error inside `it` statements in the .spec file. Do not touch `chai.expect`!!
function Person(){
    this.age = 0;

    setInterval(() => {
        this.age = 90; // `this` указывает на объект Person
    }, 1000);
}

var p = new Person();
alert('asdf');
console.log(p.age);