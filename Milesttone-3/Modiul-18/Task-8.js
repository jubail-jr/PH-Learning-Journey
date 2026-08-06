// Task 8: getManagerName(employee) — Optional Chaining 
// Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.
// Input:  { name: "Mim", manager: { name: "Tanvir" } }
// Output: "Tanvir"

// Input:  { name: "Rafi" }
// Output: undefined


const getManagerName = (employee) => {
    let managerName = employee.manager?.name
    return managerName
}

console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }));
console.log(getManagerName({ name: "Rafi" }));