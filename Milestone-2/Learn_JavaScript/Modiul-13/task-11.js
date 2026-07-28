// Write a function averageOfArray that takes an array of numbers and returns their average.

function averageOfArray (numbers){
    let sum = 0;
    let numbersLength = numbers.length
    for(let i = 0; i < numbersLength; i++){
        sum += numbers[i]
    }
    let averageArray = sum / numbersLength
    return averageArray
}


console.log(averageOfArray([2,4,6]));