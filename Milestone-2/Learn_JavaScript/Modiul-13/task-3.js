function productOfDigits (number){
    let totalMuliply = 1;
    let strNumber = number.toString();
    let arrNumber = strNumber.split("")
    
    for (let i = 0; i < strNumber.length; i++){
        totalMuliply *= strNumber[i]
    }
    return totalMuliply
}
console.log(productOfDigits(123));
console.log(productOfDigits(4040));