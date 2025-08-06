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

// ✅ INTERFACE DECLARATION MERGING - Full Example with Roman Urdu Comments

// 🔸 TypeScript mein "interface" aik blueprint hota hai
// jo batata hai ke kisi object mein kya kya cheezein (properties/methods) honi chahiyein

// 🔸 Kabhi kabar large projects mein humein aik interface ko multiple jagah
// define karna padta hai — ya naye features add karne hote hain
// TypeScript humein allow karta hai ke hum aik hi naam ka interface
// dobara declare karein — aur wo un sabko "merge" kar deta hai
// Isay kehtay hain: DECLARATION MERGING

// 🧾 Pehla interface "Car" banaya gaya hai
interface Car {
  brand: string;       // Har Car ka brand hona chahiye (string)
  start(): void;       // Har Car ko start karne ka method hona chahiye
}

// 🔄 Doosri dafa wahi interface "Car" declare kiya gaya hai
// Lekin is dafa naye properties/methods add kiye gaye hain
interface Car {
  model: string;       // Car ka model bhi hona chahiye (string)
  stop(): void;        // Car ko stop karne ka method bhi hona chahiye
}

// ✅ Ab TypeScript ne dono declarations ko merge kar diya hai
// Final interface Car ke paas ye 4 members hain:
// - brand: string
// - start(): void
// - model: string
// - stop(): void

// 🧪 Ab hum aik object banate hain is merged interface ka use kar ke
const myCar: Car = {
  brand: "Toyota",      // ✅ brand property
  model: "Camry",       // ✅ model property

  start() {             // ✅ start method
    console.log("Car started");
  },

  stop() {              // ✅ stop method
    console.log("Car stopped");
  }
};

// 🔁 Ab methods call karke dekhte hain
myCar.start();   // Output: Car started
myCar.stop();    // Output: Car stopped

// ✅ Sab kuch perfect kaam karega because TypeScript ne interface ko merge kar diya tha
// Is technique ka faida hota hai k aap interface ko alag alag jagah extend ya update kar saktay ho








