// Regular
function printNum(item:number, defaultValue:number) : [number,number]{
    return [item,defaultValue]
}

function printStr(item:string, defaultValue:string) : [string,string]{
    return [item,defaultValue]
}

function printBool(item:boolean, defaultValue:boolean) : [boolean,boolean]{
    return [item,defaultValue]
}

const numb = printNum(3,4)
console.log(numb);

const stri =printStr("uzair","arif")
console.log(stri);

const boole = printBool(true,false)
console.log(boole);

//Generic
function UniqueDataTypesFunc<Type>(items: Type ,defaultValues: Type) : [Type, Type]{
    return[items,defaultValues]
}
const numbe = UniqueDataTypesFunc(10,20)
const strin = UniqueDataTypesFunc("Hello","World")
const boolea = UniqueDataTypesFunc(false,true)

console.log(numbe);
console.log(strin);
console.log(boolea);

// we can also use interface
interface Dog{
    name: string;
    breed: string;
}



const dog1 = UniqueDataTypesFunc<Dog>({name: "Jeffy", breed: "persian"},{name: "Waju", breed: "badmash"})
console.log(dog1);

// another example
// Generic function jisme do type parameters hain: T aur U
function reversePair<T, U>(value1: T, value2: U): [U, T] {
    // Function dono values ko ulta karke tuple mein return karta hai
    return [value2, value1];
}

// Function ko call kiya jahan pehla value string hai aur doosra number
const reversedPair = reversePair("hello", 20);

// Output hoga: [20, "hello"]
console.log(reversedPair);



// --------------------------------------
//generic class
// Generic class Box jisme type T pass hoti hai
class Box<T> {

    private content: T;
    constructor(initalContent: T) {
        this.content = initalContent;
    }
    getContent(): T {
        return this.content;
    }
    setContent(newContent: T): void {
        this.content = newContent;
    }
}
// Yahan Box class ka ek instance banaya gaya with string type
const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox.getContent());  // Output: Hello, TypeScript
// Number type box
const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // Output: 123

// Set new number value
numberBox.setContent(456);
console.log(numberBox.getContent()); // Output: 456

// String type box again
const anotherStringBox = new Box<string>("Generic Power");
console.log(anotherStringBox.getContent()); // Output: Generic Power




















