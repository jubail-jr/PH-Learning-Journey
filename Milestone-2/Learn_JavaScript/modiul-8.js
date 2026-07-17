"use strict";

// *** Practice - 1 ****
// Take two variables price1 and price2, and compare them using all comparison operators (==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.

let price1 = 700;
let price2 = 1000;

console.log(price1 == price2); //false
console.log(price1 === price2); //false
console.log(price1 != price2); //true
console.log(price1 !== price2); //true
console.log(price1 > price2); //false
console.log(price1 < price2); //true
console.log(price1 >= price2); //false
console.log(price1 <= price2); //true

// *** Practice - 2 ****
// Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.

console.log("5" == 5); //true
console.log("5" === 5); //false

// *** Practice - 3 ****
// Create a variable isRaining (true/false). If it is true, print "Take an umbrella".

let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella");
} else {
  console.log("Take your sunglasses.");
}

// *** Practice - 4 ****
// Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else).

let stock = 0;

if (stock === 0) {
  console.log("Out of stock");
}

// *** Practice - 5 ****
// Take a number variable and check whether it is positive or negative (using if-else).

let number = -10;

if (number < 0) {
  console.log("This is Negative Number");
} else if (number > 0) {
  console.log("This is Positive Number");
} else {
  console.log("This is Neutral Number");
}

// *** Practice - 6 ****
// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

const year = 2006;

if (year % 4 === 0) {
  console.log("It is a Leap Year");
} else {
  console.log("It is not a Leap Year");
}

// *** Practice - 7 ****
// Take a speed variable. If speed is greater than 80, print "Overspeeding", otherwise print "Normal speed".

let speed = 60;
if (speed > 80) {
  console.log("Overspeeding");
} else {
  console.log("Normal Speed");
}

// *** Practice - 8 ****
// Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).

const age = 23;
let hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log("Entry Allowed");
} else {
  console.log("Not Allowed");
}

// *** Practice - 9 ****
// Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today");
} else {
  console.log("Working Day");
}

// *** Practice - 10 ****
// Build a simple login system — print "Login successful" only if both username and password are correct.

const userName = "jubail";
const Password = "12345";

if (userName === "jubail" && Password === "12345") {
  console.log("Login Successfull");
} else {
  console.log("Login Not Accepted");
}

// *** Practice - 11 ****
// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

let marks = 50;

if (marks >= 80) {
  console.log("Your Grade is A+");
} else if (marks >= 70) {
  console.log("Your Grade is A");
} else if (marks >= 60) {
  console.log("Your Grade is B");
} else if (marks >= 50) {
  console.log("Your Grade is C");
} else {
  console.log("You are Failed");
}

// *** Practice - 12 ****
// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

let bmi = 23;

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Normal");
} else if (bmi >= 25 && bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

// *** Practice - 13 ****
// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).

const banglaMonthNumber = 13;

if (banglaMonthNumber === 1 || banglaMonthNumber === 2) {
  console.log("It is summer now.");
} else if (banglaMonthNumber === 3 || banglaMonthNumber === 4) {
  console.log("It is now the rainy season.");
} else if (banglaMonthNumber === 5 || banglaMonthNumber === 6) {
  console.log("It is autumn now.");
} else if (banglaMonthNumber === 7 || banglaMonthNumber === 8) {
  console.log("It is now late autumn.");
} else if (banglaMonthNumber === 9 || banglaMonthNumber === 10) {
  console.log("It is winter now.");
} else if (banglaMonthNumber === 11 || banglaMonthNumber === 12) {
  console.log("It is now spring.");
} else {
  console.log("Invalid Month");
}

// *** Practice - 14 ****
// Using age and hasID, use nested if-else to check whether someone is eligible to vote.

const myAge = 18;
const hasID = true;

if (myAge >= 18) {
  if (hasID) {
    console.log("You eligible to Vote");
  } else {
    console.log("Need valid ID Card");
  }
} else {
  console.log("You Not eligible to vote");
}

// *** Practice - 15 ****
// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".

let isLoggedIn = false;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Admin Dashboard");
  } else {
    console.log("User Dashboard");
  }
} else {
  console.log("Please Login");
}

// *** Practice - 16 ****
// Determine whether a number is even or odd using the ternary operator.

let thisNumber = 17;

thisNumber % 2 === 0 ? console.log("even") : console.log("odd");

// *** Practice - 17 ****
//  Using age, determine "Adult" or "Minor" using the ternary operator.

const yourAge = 13;

yourAge >= 18 ? console.log("Adult") : console.log("Minor");

// *** Practice - 18 ****
// If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.

let price = 1700;

price > 1000 ? console.log("Expensive") : console.log("Affordable");

// *** Practice - 19 ****
// Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.

let hasPermission = true;

if (!hasPermission) {
  console.log("Access Denied");
} else {
  console.log("Access Alowed");
}

// *** Practice - 20 ****
// Using isOnline, use the NOT operator to print "User is offline".

let isOnline = true;

if (!isOnline) {
  console.log("User is offline");
} else {
  console.log("User is Active");
}

// *** Practice - 21 ****
// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

let productPrice = 10000;
let isMember = true;

if (productPrice >= 1000 && isMember) {
  let discountPrice = (productPrice * 20) / 100;
  productPrice = productPrice - discountPrice;
  console.log("20% Discount Your Price:" + productPrice + "tk");
} else if (productPrice >= 1000 && !isMember) {
  let discounPrice = (productPrice * 10) / 100;
  productPrice = productPrice - discounPrice;
  console.log("10% Discount Your Price:" + productPrice + "tk");
} else {
  console.log("No Discount Your Price: " + productPrice + "tk");
}

// *** Practice - 22 ****
// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

let username = "jubail";
let loginPassword = "12345";
let is_Admin = true;

if (username === "jubail" && loginPassword === "12345") {
  console.log("Login Succesfull");

  is_Admin
    ? console.log("Welcome your Admin Dashboard")
    : console.log("Welcome your User Dashboard");
} else {
  console.log("Invalid username or password");
}
