
function countVowels (string){
    const vowels = "aeiou"
    let cleanString = string.toLowerCase().trim()
    let count = 0;

    for (let i = 0; i < cleanString.length; i++){
        if(vowels.includes(cleanString[i])){
            count += 1;
        }
    }
    return count
}

console.log(countVowels("  JAvaSrIpt   "));