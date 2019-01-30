// Exercise 03:
//Create an object called shape that has the type property and a getType() method.

//Define a Triangle() constructor function whose prototype is shape.
// Objects created with Triangle() should have three own properties—a, b, and c,
// representing the lengths of the sides of a triangle.

//Add a new method to the prototype called getPerimeter()

function Shape() {
    this.type = '';
    this.getType = function ()
    {

    }
}

var shape = new Shape();



function Triangle(a, b, c)
{
    Triangle.prototype = shape;
    Triangle.prototype.constructor = Triangle;
    this.a = a;
    this.b = b;
    this.c = c;
}

