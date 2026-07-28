
function revereWords (sentence) {
    let arrSentence = sentence.split(" ");
    let revWords = [];
    for(let i = arrSentence.length -1; i >= 0; i--){
        revWords.push(arrSentence[i])
    }
    let strWords = revWords.join(" ")
    return strWords
}

console.log(revereWords("hello world"));