// Tells TypeScript that we are only ever going to assign a value of type number to variable apples
let apples: number = 5;
let speed: string = 'fast';
// let speed: string = 0 // => will give a linting error
let hasName: boolean = true;
// be aware of when you're working with something that is a type vs. a value
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
// capital name will refer to that class, whereas lowercase refers to the instance of that class
let car: Car = new Car();

// Object Literal
  // When annotating property types, separate them with a ;
  // Don’t have to put a; after the last property annotation, but you can if you want to
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
}

// Function
  // if you get an underline on a variable in an argument, it is because it is being coerced into type any and would prefer a specific annotation
  // every part up to void is part of the annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


// When to use Annotations
  // 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
  // Whenever we call JSON.parse();, we get back a value of the any type
  // SOLUTION: add typing
const coordinates: { x: number; y: number}  = JSON.parse(json);
console.log(coordinates); // {x:10, y: 20};

  // 2) When we declare a variable on 1 line & intialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // best way: let foundWord = false; so TypeScript can infer type

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

  // 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}