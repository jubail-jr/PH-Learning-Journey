// একটি function লেখো যা একটি number নিয়ে check করবে সেটা even কি না।
// Input:
// isEven(8)
// Output:
// true


const isEven = (num:number):boolean =>{
    return num % 2 === 0
}

console.log(isEven(8));