// Task 13-9: Long Words Above a Length, Then Their Count
// Problem Statement:
// Write two functions:
// getWordsLongerThan — takes an array of words and a length threshold, and returns a new array containing every word whose length is greater than the threshold.
// countArray — takes an array and returns how many elements it contains.
// Then use the returned array from getWordsLongerThan as the input to countArray.


function getWordsLongerThan (words,minLength){
    let longWords = [];
    
    for(const word of words){
        if (word.length > minLength){
            longWords.push(word)
        }
    }
    return longWords
    
}

function countArray (arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        count++
    }
    return count
}

let words = ["cat","elephant","dog","hippopotamus","ox","javaScript"];
let longWords = getWordsLongerThan(words,3)
let total = countArray(longWords);

console.log(longWords);
console.log(total);