// Union ka mtlb hai agr ek variable ha uski multiple types ho sakti hain jese usko string bh banaskty number bh banaskty ya boolean bh banaskty hain
// Union type ko combine krne k liye pipe ka use krte hain

let password: string | number = 20 

type UserInfo = {
    firstName: string;
    lastName: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}
let User: UserInfo | AccountDetails = {
    firstName: "Uzair",
    lastName: "Arif",
    age: 22
}
// or

/* let User: UserInfo | AccountDetails = {
    email: "uzair@gmail.com",
    password: "uzair123"
}
*/

// Array ma bh use kr sakty hain
let userArray: (string | number | boolean)[] = ["Uzair", 22, "Arif", 20,true];
console.log(userArray);
