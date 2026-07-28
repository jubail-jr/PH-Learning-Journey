function getOddNumbers (number){
    let oddArr = [];

    for (let i = 1; i<=number; i++){
        if (i % 2 !== 0){
            oddArr.push(i)
        }
    }
    return oddArr
}

console.log(getOddNumbers(10));
console.log(getOddNumbers(31));