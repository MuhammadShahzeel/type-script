// interface definition
interface computer{
    name: string;
    ram: number;
    hdd: number;
}

//usage
const compExample: computer = {
    name: "i7",
    ram: 9,
    hdd: 100
}
console.log(compExample.name);
console.log(compExample.ram);
console.log(compExample.hdd);

// Interface for function
interface MathOperation{
    (x: number, y: number): number;
}
const add: MathOperation = (a,b) => a + b;
const subtract: MathOperation = (a,b) => a - b;
console.log(add(3,5));
console.log(subtract(7,3));

// Interface for a class
interface Vehicle{
    start(): void;
    stop(): void
}

class bike implements Vehicle {
    start(){
        console.log("Bike started");
    }
    stop(){
        console.log("Bike stops");
    }
}

const myBike = new bike();
myBike.start();
myBike.stop();