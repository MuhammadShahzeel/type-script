// is ma hum Type lagake apna object ka structure define krte hai tu jese hum objects ma variable ke sth strucutre define krrhy thy tu wo lambi nh hogy

/* Basic structure of a Type Alias in TypeScript
type AliasName = {
    property1: Type1;
    property2: Type2;
    // ... other properties
    propertyN: TypeN;
}

*/ 

// -------- Example of a type alias for a complex object structure -----
type Person = {
    firstName: string;
    age: number;
    location: string;
};

const personInfo = (person: Person) => {
    return(`Person: ${person.firstName}, Age: ${person.age}, Location: ${person.location}`);
}
const reslt = personInfo({
    firstName: "Alice",
    age: 28,
    location: "Los Angeles"
});
console.log(reslt);


