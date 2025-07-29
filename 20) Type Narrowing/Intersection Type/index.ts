/* Intersection Type
Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection types using the & operator.
*/ 

// Define two types
 type Employee = {
   id: number;
 nme: string;
}
type Manager = {
department: string;
role: string;
}
 // Create an intersection type
 type ManagerWithEmployeeInfo = Employee & Manager;

// Example usage
 const manager: ManagerWithEmployeeInfo = {
 id: 123,
 nme: "John Doe",
 department: "Engineering",
 role: "Team Lead",
};

console.log(manager.id); // Outputs: 123
console.log(manager.nme); // Outputs: John Doe
console.log(manager.department); // Outputs: Engineering
console.log(manager.role); // Outputs: Team Lead