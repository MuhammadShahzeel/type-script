// String literal types

let colors: "red" | "green" | "blue";
colors = "red"; // valid
//colors = "yellow"; // Error: Type '"yellow"' is not assignable to type
console.log(color); // Output: red

// Boolean literal types
let isActive: true | false;
isActive = true; // valid
//isActive = "yes"; // Error: Type '"yes"' is not assignable to type

// Numeric literal types
let statusCode: 200 | 404 | 500;
statusCode = 200; // valid
//statusCode = 301; // Error: Type '301' is not assignable to type