//***************
// 
//*** Begginer***
//  
//***************

// Task-1
//1. Create an array with 3 items of your choice. Log it.Expected: array with your 3 items printed

let myFriends = ["Jubail", "Rakib", "Siam"];
console.log(myFriends);

// Task-2
// Log the length of the array from Task 1.

let myFriendsLength = myFriends.length
console.log(myFriendsLength);

// Task-3
// Log the item at index 0 and index 2 of the array.

console.log(myFriends[0],myFriends[2]);

// Task-4
// Change the item at index 1 to a new value. Log the array.

myFriends[1] = "Hasan";
console.log(myFriends);

// Task-5
//Add one item to the end of the array. Log the array.

myFriends.push("Mehedi");
console.log(myFriends);

// Task-6
//Remove the last item from the array. Log the array and the removed value.

myFriends.pop()
console.log(myFriends);

// Task-7
// Add one item to the start of the array. Log the array.
myFriends.unshift("Riyad");
console.log(myFriends);

// Task-8
// Remove the first item from the array. Log the array and the removed value.

myFriends.shift()
console.log(myFriends);

// Task-9
// Check whether the array contains a specific value. Log true or false.

console.log(myFriends.includes("Jubail"));

// Task-10
// Find the position of a specific value in the array. Log the number.

console.log(myFriends.indexOf("Siam"));

// Task-11
//  Loop through the array with a for loop and log each item.

for(const friend of myFriends){
    console.log(friend);
}

// Task-12
// Loop through the array with a while loop and log each item.

let i = 0;
while(i<myFriends.length){
    console.log(myFriends[i]);
    i++
}

//********************
// 
//*** Intermediate ***
//  
//********************

// Task-1
// Combine two arrays into one new array. Log the result.

let num1 = [12,34,56,43,67,76]
let letter = ["A", "B", "C", "D", "E"]

let concatArray = num1.concat(letter);

console.log(concatArray);

// Task-2
// Take a portion of an array (not the whole thing) without changing the original. Log the result.

let sliceNum1 = num1.slice(1,5);
console.log(sliceNum1);
console.log(num1);

// Task-3
//  Turn an array of words into a single sentence string.Expected: a string like "word word word"

let joinedLertter = letter.join(" ")
console.log(joinedLertter);

// Task-4
// Check two variables (one array, one not) and log whether each is an array.

let hobbies = ["Coding", "Traveling", "Reading", "Sweeming", "Eating"]
let myFrindsName = "Jubail, Rakib, Siam, Abir, Naim";
console.log(Array.isArray(myFrindsName));
console.log(Array.isArray(hobbies));

// Task-5
//  Reverse an array of at least 5 items. Log the result.

hobbies.reverse();
console.log(hobbies);
let reverseHobbies = [];
for(let i = hobbies.length -1; i>=0; i--){
    
    reverseHobbies.push(hobbies[i]);
}
console.log(reverseHobbies);

// Task-6
// Sort an array of names alphabetically. Log the result.

hobbies.sort();
console.log(hobbies);

// Task-7
// Sort an array of numbers in ascending order, keeping numeric order correct (not string order).

let sortNumber = [8,4,2,0,1,6,3,9,5,7];
sortNumber.sort();
console.log(sortNumber);

// Task-8
//  Given an array of numbers, log only the values greater than 10, using a loop.

let numbers1 = [32,65,2,66,3,9,37,9,35,64,2,6,63,92,0,11,10];
let bigNum = [];
for(const number1 of numbers1){
    if (number1 > 10){
        bigNum.push(number1)
    }
}
console.log(bigNum);

// Task-9
// Given an array of numbers, calculate and log the total sum, using a loop.
let sumNumbers = [34,6554,5734,57,32645,745,344356,34534,34535,65754,34534,45345,6,5,43534];
let sum = 0;

for(const sumNumber of sumNumbers){
    sum = sum + sumNumber
}
console.log(sum);


//****************
// 
//*** Advanced ***
//  
//****************


// Task-1
// Given an array of numbers, remove duplicates and log the unique values only.

let mixedNumbers = [4,3,1,4,6,2,7,1,4,5,7,8,5,4,5,0]
let uniqueNumbers = [];

for(let i =1; i<mixedNumbers.length; i++){
    if(!uniqueNumbers.includes(mixedNumbers[i])){
        uniqueNumbers.push(mixedNumbers[i])
    }
}
console.log(uniqueNumbers);


// Task -2
// Given an array of mixed values (numbers and strings), separate them into two arrays and log both.


let mixedValue = [1,"Jubail", false, "Rakib", 35, true, "Siam", 45, 200, "Abir"];
let stringValue = [];
let numberValue = [];
let booleanValue = [];

for(let i =0; i< mixedValue.length; i++){
    if (typeof mixedValue[i] === "number"){
        numberValue.push(mixedValue[i])
    } else if(typeof mixedValue[i] === "string"){
        stringValue.push(mixedValue[i])
    } else if (typeof mixedValue[i] === "boolean"){
        booleanValue.push(mixedValue[i])
    }
}
console.log(stringValue);
console.log(numberValue);
console.log(booleanValue);

// Task-3
// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).

let numbers5 = [12,45,56,32,45,10,35,23,76,86,23,54,45]

let minNum = numbers5[0];
let maxNum = numbers5[0];

for(let i = 1; i< numbers5.length; i++){
    if (numbers5[i] < minNum){
        minNum = numbers5[i]
    } else if (numbers5[i] > maxNum){
        maxNum = numbers5[i]
    }
}
console.log(minNum);
console.log(maxNum);

// Task-4
// Flatten a nested array (array containing arrays) into a single flat array.Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]

let nestedArray = [1,2,3,4,5,6,[10,20,30,40,50,60, [100,200,300,400,500,600]],1000,2000,3000,4000,5000,6000];

let flatArray = nestedArray.flat(Infinity);

console.log(flatArray);



// Task-5
// Rotate an array left by one position (first item moves to the end). Log the result.Expected: [2,3,4,5,1] from [1,2,3,4,5]

let numbers6 = [1,2,3,4,5];

let firstNumber = numbers6[0]

for(let i = 0; i < numbers6.length - 1; i++){
    numbers6[i] = numbers6[i+1];


}
numbers6[numbers6.length - 1] = firstNumber;
console.log(numbers6);