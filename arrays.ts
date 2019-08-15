// whenever you want to initialize an array, you should use an annotation to prevent the default assignment of the 'any' type
// If it is initialized with contents already in it, you don’t need to annotate
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// 2D array
// 2D array annotation: const varName: type[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];
// const carsByMake: string[][] = [];


// Why TS matters for Arrays
// 1) Help with inference when extracting values
const car2 = carMakers[0]; // TS infers it's a string
const mrCar = carMakers.pop(); // TS infers it's a string

// 2) Prevent incompatible values
// carMakers.push(100);

// 3) Help with array iterators
// 'map'
carMakers.map((car: string): string => {
  // TS gives us autocomplete on the variable being passed into the iterator
  return car;
});

// 4) Flexible types
// this will pipe | elements that let it be either type
const importantDates = [new Date(), '2030-10-10'];
// If you don’t initialize array with all of the types the elements could be, you would have to add an annotation
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10');
importantDates2.push(new Date());
// importantDates2.push(100); // => error