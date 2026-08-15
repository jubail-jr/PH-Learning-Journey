// একটি tuple বানাও যেখানে একজন মানুষের নাম আর বয়স থাকবে।
// Input:
// ["Amina", 22]
// Output:
// Amina is 22 years old.

const printUser = (userName:string,age:number):string =>{
    return `${userName} is ${age} years old.`
}

let user : [string,number] = ["Amina" , 22]

let [userName,age] = user

console.log(printUser(userName,age));