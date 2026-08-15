// একটি number positive না negative তা ternary operator দিয়ে বের করো।
// Input:
// num = 5
// Output:
// Positive

const getPositiveOrNegativeNumber = (num:number):string =>{
    return num > 0 ?"Positive" : num < 0?"Negative" : "Neutral"
}

console.log(getPositiveOrNegativeNumber(5));