
function countMultiplesOfThree (numbers){
    let count = 0;
    for(let i = 0; i < numbers.length ; i++){
        if(numbers[i] % 3 === 0){
            count += 1;
        }
    }
    return count
}
console.log(countMultiplesOfThree([3,4,6,7,9,10]));