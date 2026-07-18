"use strict";

//Task 1 — Write a for loop that prints "Hello" 5 times.

for(let i = 1; i<=5; i++){
    console.log("Hello", i);
}

//Task 2 — Write a for loop that prints numbers from 1 to 10.

for (let i = 1; i<=10; i++){
    console.log(i);
}

//Task 3 — Write a while loop that prints numbers from 10 down to 1.

let i = 10;

while( i>0 ){
    console.log(i);
    i--
}

//Task 4 — Using a while loop, print "Loop চলছে" exactly 7 times.

let loop = 1;

while ( loop <=7){
    console.log("Loop চলছে" , loop);
    loop++
}

//Task 5 — Write a for loop that prints all even numbers between 1 and 30.


for(let count = 1; count <=30; count++){
    if(count % 2 === 0){
        console.log("Even Number " + count);
    }
}

//Task 6 — Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

let sum = 0;
for(let i = 1; i<=20; i++){
    
    sum = sum + i;
    
}
console.log(sum);


//Task 7 — Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.

let number = 7;

for(let i = 1; i <=10; i++){
    let multiply = number * i;
    console.log(number + " X " + i + " = " + multiply);
}

//Task 8 — Write a for loop that counts down from 20 to 1.

let counts = 20;

while (counts >=1){
    console.log(counts);
    counts--
}

//Task 9 — Write a for loop that calculates the sum of all even numbers from 2 to 50.

let evenSum = 0;
for(let i =1; i<=50; i++){
    if (i % 2 === 0){
        evenSum = evenSum + i;
    }
}
console.log(evenSum);


//Task 10 — Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.


let breakLoop = 1;

while (breakLoop <=50){
    if(breakLoop >30){
        break;
    }
    console.log(breakLoop);
    breakLoop++
}

 //Task 11 — Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

for(let i = 1; i<=20; i++){
    if(i % 4 === 0){
        continue;
    }
    console.log(i);
}

//Task 12 — Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.

let doNumber = 1;

do{
    console.log(doNumber);
    doNumber++
} while (doNumber <=5)

//Task 13 — Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.

for(let i = 1; i<=5; i++){
    console.log(i);
}

let whileLoop = 1;
while(whileLoop <= 5){
    console.log(whileLoop);
    whileLoop++
}

let doWhileLoop = 1;

do{
    console.log(doWhileLoop);
    doWhileLoop++
} while (doWhileLoop <=5)

console.log(" ");
console.log(" ");


//Task 14 — Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.

for(let i = 1; i<=100; i++){
    if(i % 5 === 0){
        continue
    }else if (i > 40){
        break
    }

    console.log(i);
};