// একটি unknown type variable declare করো এবং পরে type check করে string হলে print করো।
// Input:
// "Hello"
// Output:
// Hello

const printHello = (input:unknown) : string =>{
    if (typeof input === "string") return input
    return "Invalid input"
}

console.log(printHello("Hello"));