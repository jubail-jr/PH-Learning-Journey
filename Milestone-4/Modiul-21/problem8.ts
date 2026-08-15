// দুইটি array merge করো spread operator ব্যবহার করে।
// Input:
// [1, 2, 3]
// [4, 5, 6]
// Output:
// [1, 2, 3, 4, 5, 6]

const mergeArray = (num1:number[],num2:number[]):number[] =>{
    let merge: number[] = [...num1, ...num2]
    return merge
}

let num1:number[] = [1,2,3]
let num2:number[] = [4,5,6]

console.log(mergeArray(num1,num2));