// TypeScript won’t actually read code to see if your function does what it does, just that it returns the correct type of value
  // it doesn't check logic
// No type inference for arguments: always add those annotations!
// Type inference works out output, but we won't use it!
const add = (a: number, b: number): number => {
  return a + b;
};

// If you don’t put a return statement, type inference will say the function returns a value of type ‘void’
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// Anytime you use an arrow function, variable, or anonymous function, you use the same syntax
const multiply = function (a: number, b: number): number {
  return a * b;
}

// return type of void could return null or undefined too
const logger = (message: string): void => {
  console.log(message);
}

// When you throw an Error, you are not technically returning anything.  Exit out of the function early.
const throwError = (message: string): never => {
  throw new Error(message);
};
// If we do expect it to eventually return something, annotate it with the type that should/could eventually return
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  };

  return message
};
// If just a chance of us not reaching the end of the function, but we are still returning nothing, return type should be 'void'
const throwError3 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  };
};

//Using destructuring with Annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};
// old way
// const logWeather = (forecast: { date: Date, weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };
// new way with destructuring // => destructuring: annotation
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

// ES2015 destructuring syntax
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// }

logWeather(todaysWeather);