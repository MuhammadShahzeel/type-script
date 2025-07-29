// Regular Function

const printString = (x: string) => x
const printNumber = (x: number) => x 
const printBoolean = (x: boolean) => x

console.log(printBoolean(true));
console.log(printString("hello"));
console.log(printNumber(23));




// Generic Function
function printInfo<T>(x: T) : T{
    return x
}
const str  = printInfo<string>("Hello generics");
const num = printInfo<number>(44);
const bool = printInfo<boolean>(false);
console.log(str,num,bool);
