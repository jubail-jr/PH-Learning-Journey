// একটি user object বানাও যেখানে name required, কিন্তু email optional।
// Input:
// { name: "Amina" }
// Output:
// Name: Amina, Email: Not provided

let user : {name:string,email?:string}= {
        name: "Amina",
}

console.log(`Name: ${user.name}, Email: ${user.email?? "Not provided"}`);