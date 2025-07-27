// Regular function

function addOne(num: number) {
    return num + 1;
}
const result = addOne(5);
console.log(result); // Output: 6

// An arrow function
const multiply = (a: number, b: number) => a * b;
const res = multiply(2, 3);
console.log(res); // Output: 6

// Default parameters value
function greet(name: string = "Guest") {
    return `Hello, ${name}!`;
}
const ans = greet(); // Output: Hello, Guest!
console.log(ans);

// Function Return Type Annotation mtlb parameter ki badd : data type likhdo ese bh krskty aur uper jese kia ha wese bh dono same he hai

// Regular function with return type annotation
function square(num: number): number {
    return num * num;
}
const squareResult = square(4);
console.log(squareResult); // Output: 16

// Arrow function with return type annotation
const double = (x: number): number => x * x;
console.log(double(5)); // Output: 25