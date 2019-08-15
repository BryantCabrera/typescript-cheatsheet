const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  //ES2015 syntax for defining a method in an object
  setAge(age: number): void {
    this.age = age;
  }
}

// old way to change age
// profile.age = 20;

// Destructuring
// old way
// const age = profile.age;

// new way
// you have to list out the structure of profile and the different properties we want it to have.
// you can't just write { age }: number because we might be destructuring out other things that have different types
const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number; }} = profile;