// Task 7: sumAllPrices(prices) — for...of 
// Given an array of numbers, return their sum using for...of.
// Input:  [100, 250, 75]
// Output: 425

const sumAllPrices = (prices) => {
    let sum = 0;
    for(const num of prices){
        sum += num
    }
    return sum
}

console.log(sumAllPrices([100, 250, 75]));