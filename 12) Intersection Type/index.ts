// 2 type ko combine krdena

type userInfo = {
    firstName: string;
    lastName: string;
    age: number;
}

type accountDetails = {
    email: string;
    password: string;
}

type userAccount = userInfo & accountDetails;

const uzair: userAccount = {
    firstName: "Uzair",
    lastName: "Arif",
    age: 22,
    email: "uzair@gmail.com",
    password: "uzair123"
}

console.log(`Name: ${uzair.firstName}  ${uzair.lastName} Age: ${uzair.age} Email: ${uzair.email} Password: ${uzair.password}`);

