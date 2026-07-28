
function reverseNumber(number){
    let strNumber = number.toString()
    let strArr = strNumber.split("");
    let strReverse = ""
    for(let i = strArr.length -1; i>=0; i--){
        strReverse += strArr[i]
    }

    return strReverse

}
console.log(reverseNumber(1234));
console.log(reverseNumber(7));