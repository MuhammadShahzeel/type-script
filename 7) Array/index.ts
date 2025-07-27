// 2 Type of Array

// Using the square bracket [] notation to indicate an array type
// Using the generic Array<Type> notation to indicate an array type (old method)

const nums: number[] = [1, 2, 3, 4, 5]; // Array of numbers
const names: Array<string> = ["Alice", "Bob", "Charlie"]; // Array of strings
const mixed: (number | string)[] = [1, "two", 3, "four"]; // Array of mixed types
console.log(nums); // Output: [1, 2, 3, 4, 5]
console.log(names); // Output: ["Alice", "Bob", "Charlie"]      
console.log(mixed); // Output: [1, "two", 3, "four"]

const strings: string[] = ["apple", "banana", "cherry"]; // Array of strings
console.log(strings); // Output: ["apple", "banana", "cherry"]

//Push number
const numbers: number[] = []; // Initialize an empty array of numbers
numbers.push(1); // Add a number to the array
numbers.push(2); // Add another number to the array
console.log(numbers); // Output: [1, 2]

// Push string
const fruits: string[] = []; // Initialize an empty array of strings
fruits.push("apple"); // Add a string to the array
fruits.push("banana"); // Add another string to the array
console.log(fruits); // Output: ["apple", "banana"]