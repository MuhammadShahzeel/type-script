/*  Type Guard
Type guards are mechanism that help ts understand and narrow down the types more precisely. One common type guard is the TypeOf operator
*/

//Define a union type
type myType = string | number

//Example function with type guard
function exampleFunction(value: myType) : void{
    //Type guard using typeOf
    if(typeof value === "string"){
        // within this block Ts knows the value is string
        console.log(value.toUpperCase())
    }else{
        // within this block Ts knows the value is number
        console.log(value.toFixed(2));
        
    }
}
exampleFunction("hello") //output: hello
exampleFunction(44) //output: 44.00