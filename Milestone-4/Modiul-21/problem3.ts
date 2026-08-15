// Problem Statement:
// একটি array বানাও যেখানে student-এর নাম থাকবে এবং কতজন আছে সেটা কনসোল করবে।
// Input:
// ["Amina", "Rahim", "Karim", "Salma", "Rafi"]
// Output:
// Total student: 5


const getTotalStudents = (studentsName:string[]):string =>{
    let TotalStudents = studentsName.length

    return `Total student : ${TotalStudents}`
}

let students : string[] = ["Amina", "Rahim", "Karim", "Salma", "Rafi"]

console.log(getTotalStudents(students));