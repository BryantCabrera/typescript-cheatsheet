const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// this is an inferred as an array, but we don't want to do that.  A tuple has a strict order
// const pepsi = ['brown', true, 40];

// this annotation turns it into a tuple because it says that order of elements has to have that order of types
// const pepsi: [string, boolean, number] = ['brown', true, 40];

// can also create a Type Alias to reuse annotations
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// you lose information in a tuple, it isn't readily readable
const carSpecs: [number, number] = [400, 3354];
// Anytime we want to model a record, use a JS object instead of a tuple
const carStats = {
  horsepower: 400,
  weight: 3354
}