// default modifier is 'public'
class Vehicle {
  // drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

// Extends allows a subclass to inherit the properties of the parent class
// Can overwrite the property of the parent class by naming the property the same thing in the child class and giving it a different value

// if child class has a property with a different modifier, it will throw an error
class Car extends Vehicle {
  // You can make a method private, then have another public method in class call it to access that method
  // We define a method as private, we aren’t adding any layer of application security
    // It only restricts the methods that other developers can call

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk(); // => can't access because this method is modified as protected

const car = new Car();
// car.drive();
car.startDrivingProcess();
// car.honk();