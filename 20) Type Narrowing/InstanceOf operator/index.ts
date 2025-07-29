/* InstanceOf operator
The instanceOf operator is another type of guard in TS that allows you to check whether an object is an instance of a particular class or constructor function
*/

class Dogs{
    bark() : void{
        console.log("Woff WOff");
    }
}

class Cats{
    meow() : void{
        console.log("Meow meow");
        
    }
}
function animalSound(animal: Dogs | Cats): void{
    if (animal instanceof Dogs) {
        animal.bark(); 
    }else{
        animal.meow()
    }
}
const myDog = new Dogs()
const myCat = new Cats()
animalSound(myDog)
animalSound(myCat)