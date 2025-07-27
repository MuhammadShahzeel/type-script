// kisi property ko optional banane ke liye, aap `?` ka istemal karte hain.
// isse aapko flexibility milti hai ki wo property object ma ho bhi sakti hai ya nahi bhi.
// agar wo property object ma nahi hai tu bhi code sahi chalega.


type User = {
    name: string;
    age: number;
    email?: string; // location property is optional
}

const user1: User = {
    name: "John",   
    age: 30
    // email property is not provided
};
console.log(`User: ${user1.name}, Age: ${user1.age}`);


const user2: User = {
    name: "Alice",
    age: 25,
    email: "Alice @example.com" // email property is provided
};

console.log(`User: ${user2.name}, Age: ${user2.age}, Email: ${user2.email}`);