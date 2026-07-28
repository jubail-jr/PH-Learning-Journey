// Write a function keepEvenNumbers that takes an array of numbers and returns a new array with only the even numbers.

function keepEvenNumbers(numbers){
    let evenArr = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers [i] % 2 === 0){
            evenArr.push(numbers[i])
        }
    }
    return evenArr
}

console.log(keepEvenNumbers([3,-5,8,-1,0]));