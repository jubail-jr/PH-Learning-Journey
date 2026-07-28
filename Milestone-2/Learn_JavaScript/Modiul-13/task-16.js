// 13-10A: Perfect Square Checker
// Problem Statement: Write a function isPerfectSquare that takes a number and returns true if it is a perfect square, otherwise false.

function isPerfectSquare (num){
    let squareNumber = [];
    for(let i = 1; i <= num; i++){
        squareNumber.push(i * i);
    }
    if (squareNumber.includes(num)){
        return true
    } else {
        return false
    }
}
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(59));
