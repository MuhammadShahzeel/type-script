/* type varName : {firstName: string, lastName: string, age: number} = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}*/
const person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`);


// -------- Example of a function that returns an object with specific properties -----
function printUser() : { firstName: string;  age: number ; location: string } {
    return {
        firstName: "Jane",
        age: 25,
        location: "New York"
    };
}

const user = printUser();
console.log(`User: ${user.firstName}, Age: ${user.age}, Location: ${user.location}`);