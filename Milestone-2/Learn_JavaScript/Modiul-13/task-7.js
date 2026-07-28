
function isPalindrome (string){
    let cleanString = string.toLowerCase().trim()
    let revereString = "";
    for(let i = cleanString.length-1; i>=0; i--){
        revereString += cleanString[i]
    }
    if(cleanString === revereString){
        return true
    } else{
        return false
    }
}

console.log(isPalindrome("  Level "));
console.log(isPalindrome("   helLo   "));