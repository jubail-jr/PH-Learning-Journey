// একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।
// Input:
// sumAll(1, 2, 3, 4)
// Output:
// 10

const sumAll = (...nums:number[]):number =>{
    return nums.reduce((acc,value) => acc+value,0)
} 

console.log(sumAll(1,2,3,4));