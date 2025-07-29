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


