
function findShortestWord (sentense){
    let arrSentense = sentense.split(" ");
    let shortest = arrSentense[0]


    for (let i = 1; i < arrSentense.length; i++){
        if (shortest.length > arrSentense[i].length){
            shortest = arrSentense[i]
        }
    }
    return shortest

}

console.log(findShortestWord("JavaScript is a fun language"));