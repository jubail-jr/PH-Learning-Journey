// Problem Statement:
// একটি function বানাও যা একটি user-এর নাম আর বয়স নিয়ে sentence print করবে।
// Input:
// printUser("Amina", 22)
// Output:
// Amina is 22 years old.



const printUser = (userName:string,userAge:number) :string => {
    return `${userName} is ${userAge} years old.`
}

console.log(printUser("Amina",22));