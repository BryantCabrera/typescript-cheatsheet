// default modifier is 'public'
class Vehicle {
  // Either you initialize a property on the same line that you define it OR initialize it in the constructor
  // color: string = 'red';

  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  // SHORTCUT
  constructor(public color: string) {
    
  }

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
// Right now, our child class does not have a constructor function.  That means that every time we instantiate it, it will call the constructor function in the parent
// class Car extends Vehicle {
//   // You can make a method private, then have another public method in class call it to access that method
//   // We define a method as private, we aren’t adding any layer of application security
//     // It only restricts the methods that other developers can call

//   private drive(): void {
//     console.log('vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }
class Car extends Vehicle {
  // Don’t put on the modifier in front of a variable in the child constructor if you are only using it for the parent’s constructor
  constructor(public wheels: number, color: string) {
    // Whenever we call the constructor function of a child class, we are required to call the constructor of the parent as well
    super(color);
  }

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
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// ISSUE: anytime we create an instance that extends a parent, we have to pass in the parent’s parameters for constructor
const car = new Car(4, 'red');
// car.drive();
car.startDrivingProcess();
// car.honk();