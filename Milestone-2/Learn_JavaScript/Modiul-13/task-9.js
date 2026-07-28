function findSecondSmallest (numbers){
    let smallestNumber = Infinity;
    let secondSmallestNumber = Infinity
    for (let i = 0; i< numbers.length; i++){
        if (smallestNumber > numbers[i]){
            secondSmallestNumber = smallestNumber;
            smallestNumber = numbers[i]
        }else if (numbers[i] < secondSmallestNumber && numbers[i]!== smallestNumber){
        secondSmallestNumber = numbers[i]
    }
    }
    return secondSmallestNumber;
}
let arrNumber = [10,5,8,15]
console.log(findSecondSmallest(arrNumber));