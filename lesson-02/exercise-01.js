// Exercise 01:
// 1. Create 2 classes: BMW and Car
// 2. Extend BWM from Car
// Implement method `drive` inside Car class. It should return string 'I drive';
// Implement method `refuel` inside Car class. It should return string 'I refuel';
// Implement method `goFast` inside BWW class. It should return string 'I go fast';
class Car {
    drive(){ return 'I drive'}
    refuel(){ return 'I refuel'}
}

class BMW extends Car{
    goFast(){ return 'I go fast'}
}