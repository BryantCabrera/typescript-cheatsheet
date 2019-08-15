class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

// Extends allows a subclass to inherit the properties of the parent class
// Can overwrite the property of the parent class by naming the property the same thing in the child class and giving it a different value

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();

const car = new Car();
car.drive();
car.honk();