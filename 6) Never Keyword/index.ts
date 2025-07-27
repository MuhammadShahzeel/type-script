// A function that always throws an error
function throwError(message: string): never {
    throw new Error(message);
}

// A function that has infinite loop
function infiniteLoop(): never {
    while (true) {
        // Do something indefinitely
    }
}

//A variable that can never have a value
let x: never;

function neverReturns(): never{
    while (true) {}
}
x = neverReturns(); // This will never complete, so x can never be assigned a value
