// Task 1: getFormattedPrices(prices) — map() 
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
// Input: [100, 250, 75] 
// Output: ["$100", "$250", "$75"]

const getFormattedPrices = (prices) =>{
    const newPrices = prices.map((price) => {
       return `$${price}`
    })
    return newPrices
}
console.log(getFormattedPrices([100,250,75]));