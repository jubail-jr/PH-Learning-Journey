// একটি TypeScript program বানাও যেখানে একজন user-এর নাম, বয়স, email, skills, আর active status থাকবে। এরপর সব তথ্য print করবে।
// Input:
// {
//   name: "Amina",
//   age: 22,
//   email: "amina@email.com",
//   skills: ["HTML", "CSS", "TypeScript"],
//   active: true
// }
// Output:
// Name: Amina
// Age: 22
// Email: amina@email.com
// Skills: HTML, CSS, TypeScript
// Active: true


const getUserInfo = (users :{
    name:string,
    age:number,
    email:string,
    skills: string[],
    active: boolean
}): string =>{
    return `Name: ${users.name}
Age: ${users.age}
Email: ${users.email}
Skills: ${users.skills.join(", ")}
Active: ${users.active}`
}

let userInfo :{
    name: string,
    age: number,
    email:string,
    skills: string[],
    active: boolean
} = {
    name: "Amina",
    age: 22,
    email:"amina@email.com",
    skills: ["HTML","CSS","TypeScript"],
    active: true
}

console.log(getUserInfo(userInfo));

export {}