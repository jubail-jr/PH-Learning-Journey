"use strict";

//Task 1 — Your First JavaScript Program

console.log("Hello JavaScript!");

console.log("My name is Alex.");

console.log("I am excited to become a Web Developer.");

//Task 2 — Simple Math Calculator

//Create two number variables and print the results of the five basic arithmetic operations.

let num1 = 25;

let num2 = 10;

 console.log("Addition:", num1 + num2);

console.log("Subtraction:", num1 - num2);

console.log("Multiplication:", num1 * num2);

console.log("Division:", num1 / num2);

console.log("Modulus:", num1 % num2);

//Task 3 — Student Information

//Store student details in variables of the appropriate type and print them.
console.log("Student Name:", studentName);

console.log("Age:", age);

console.log("Country:", country);

console.log("Is Student:", isStudent);

//Task 4 — Identify Data Types

//Use the typeof operator to check the data type of each variable.

let a = 100;

let b = "Programming";

let c = true;

let d = false;

let e = 3.1416;

 

console.log("a:", typeof a);

console.log("b:", typeof b);

console.log("c:", typeof c);

console.log("d:", typeof d);

console.log("e:", typeof e);

//Task 5 — Variable Naming Challenge

//Only names that follow JavaScript's identifier rules (start with a letter, $, or _; no hyphens; not a reserved keyword) are valid.

let firstName = "Alex";

let First_Name = "Alex";

let user123 = 1;

let $price = 19.99;

let _total = 0;

 

console.log(firstName, First_Name, user123, $price, _total);

//Task 6 — Personal Bio

//Store personal details and print a friendly, formatted introduction.

let name = "Alex";

let age = 20;

let favoriteFood = "Pizza";

let favoriteLanguage = "JavaScript";

let lovesCoding = true;

 

console.log("Hello!");

console.log("My name is " + name + ".");

console.log("I am " + age + " years old.");

console.log("My favorite food is " + favoriteFood + ".");

console.log("My favorite programming language is " + favoriteLanguage + ".");

console.log("I love coding:", lovesCoding);

//Task 7 — Arithmetic Practice

//Take two numbers and print the results of all five arithmetic operations, matching the example format.

let number1 = 50;

let number2 = 8;

 

console.log("Number 1:", number1);

console.log("Number 2:", number2);

console.log();

console.log("Addition:", number1 + number2);

console.log("Subtraction:", number1 - number2);

console.log("Multiplication:", number1 * number2);

console.log("Division:", number1 / number2);

console.log("Modulus:", number1 % number2);

//Task 8 — Shorthand Operators

//Apply each shorthand operator to score and print the value after every step.

let score = 50;

 

score += 10;

console.log("After += 10:", score);

 

score -= 5;

console.log("After -= 5:", score);

 

score *= 2;

console.log("After *= 2:", score);

 

score /= 5;

console.log("After /= 5:", score);

 

score %= 4;

console.log("After %= 4:", score);

//Task 9 — Mini Coding Challenge

//Calculate the total price, discount amount, and final price for a purchase.

let price = 200;

let quantity = 3;

let discount = 10; // percent

 

let totalPrice = price * quantity;

let discountAmount = (totalPrice * discount) / 100;

let finalPrice = totalPrice - discountAmount;

 

console.log("Total Price:", totalPrice);

console.log("Discount Amount:", discountAmount);

console.log("Final Price:", finalPrice);