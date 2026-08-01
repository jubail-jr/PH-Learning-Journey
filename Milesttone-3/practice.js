function sumAllNumbers(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sumAllNumbers(1, 2, 3, 4, 5));