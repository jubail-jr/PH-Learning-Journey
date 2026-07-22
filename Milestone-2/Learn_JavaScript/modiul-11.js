// Task 1.1

// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];
// Log str.length and arr.length. What do you notice?
// Try str[0] and arr[0]. Do both work the same way?
// Try str.push("!") — what happens? Why does this fail for strings but not arrays?

let str = "hello";
let arr = ["h", "e", "l", "o"];

console.log(str.length);
console.log(arr.length);
console.log(str[0]);
console.log(arr[0]);

arr.push("!")
arr.push("!")

console.log(str,arr);

// Task 1.2 — Convert Between Them
// Convert the string "JavaScript" into an array of characters.
// Convert the array ["c", "a", "t"] back into a single string "cat".

let strText = "JavaScript";
let arrLtr = ["c", "a", "t"];

let arrStrText = strText.split("")
let strArrLtr = arrLtr.join("")

console.log(arrStrText);
console.log(strArrLtr);

// Task 2.1 — Case Conversion
// let name = "JavaScript";
// Print the uppercase version.
// Print the lowercase version.
// Print the string with whitespace trimmed: "   hi there   " → "hi there"

let name = "JavaScript";
let spaceLtr = "  hi there  "


let upName =  name.toUpperCase();
let lowName = name.toLowerCase();
let trimLtr = spaceLtr.trim()

console.log(upName);
console.log(lowName);
console.log(trimLtr);

// Task 3.1 — Slicing Strings
// let sentence = "Learning JavaScript is fun!";
// Get just the word "Learning" using .slice().
// Get the last 4 characters ("fun!") using .slice() with a negative index.

let sentence = "Learning JavaSript is fun!";

let part = sentence.slice(0,8);
let part2 = sentence.slice(-4);

console.log(part);
console.log(part2);

// Task 3.2 — Combine Strings
// Use .concat() to join "Hello" and "World" into "Hello World".
// Use + and template literals to do the same thing. Compare all three approaches.

let str1 = "Hello";
let str2 = "World";

let concatStr = str1.concat(" ", str2);

console.log(concatStr);
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

// Task 4.1 — Three Reversal Methods
// Write a function reverseString(str) three different ways:
// Using .split(""), .reverse(), and .join("")
// Using a for loop that builds the reversed string character by character


// Test all three with "JavaScript" → should return "tpircSavaJ".
// Bonus: Which method do you think is fastest? Why?

let learning = "JavaScript";

let reverseLearning = learning.split("").reverse().join("");
console.log(reverseLearning);

// Task 5.1 — Build a Profile Object
// Create an object student with these properties: name, age, grade, and isEnrolled.
// Log the whole object.
// Log just the name property using dot notation.


let profile = {
    name: "Jubail",
    age: 23,
    grade: "A+",
    isEnrolled: true,
}
console.log(profile);
console.log(profile.name);

// Task 5.2 — Watch the Video Concept
// After watching the "What is an Object" video, write 2–3 sentences (as a comment in your code) explaining an object in your own words, using a real-life analogy (not a car or a person — get creative!).


/*************************************************************
 * An object in JavaScript is like a smart backpack: instead of storing a single item, 
 * it holds a collection of related items organized by labeled pockets (key-value pairs). 
 * For instance, a backpack object might have a property for 'color', a list of 'contents', 
 * and even actions (methods) it can perform, like 'zipUp()' or 'unzip()'.
 **********************************************************/


// Task 6.1 — Dot vs Bracket Notation
// let car = { brand: "Toyota", model: "Corolla", year: 2022 };
// Get brand using dot notation.
// Get model using bracket notation.
// Add a new property color: "blue" using bracket notation.
// Update year to 2023 using dot notation.

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
}
console.log(car.brand);
console.log(car["model"]);
car.color = "blue";
car.year = 2023;
console.log(car);

// Task 7.1 — Keys and Values
// let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
// Get an array of all keys 
// Get an array of all 
// Delete the pages property using delete.


let book = {
    title: "The Hobbit",
    author: "Tolkein",
    pages: 310,
}

let arrKeys = Object.keys(book)
console.log(arrKeys);
let arrValues = Object.values(book)
console.log(arrValues);

delete book.pages
console.log(book);

// Task 7.2 — Nested Objects
// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701"
//   }
// }
// Log the city using dot notation chaining.
// Add a country property inside the address.
// Delete the zip property from the nested object.

let user = {
    userName: "coder123",
    address: {
        city: "Austin",
        zip: "78701"
    }
}

console.log(user.address.city);
user.address.country = "Usa";
delete user.address.zip

console.log(user);

// Task 8.1 — Loop Through Properties
// let scores = { math: 90, science: 85, art: 95 };
// Use a for...in loop to log each key and value like: math: 90.
// Calculate the average of all values in the loop.


let scores = {
    math: 90,
    science: 85,
    art: 95,
}
let average = 0;

for (const key in scores){
    const value = scores[key]
    console.log(key + ":" + value);
    average += value
}
console.log(average/3);


// Task 9.1 — Contact Book
// Build a small "contact" system:
// let contact = {
//   name: "Alex Johnson",
//   email: "ALEX@EMAIL.COM",
//   phone: "555-1234"
// };
// Convert the email to lowercase and update the object.
// Loop through the contact object and print each key-value pair.
// Add a new property favoriteWords: [] (an array) — push 3 words to it.
// Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
// Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.




let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

contact.email = contact.email.toLowerCase();

for (let key in contact) {
  console.log(`${key}: ${contact[key]}`);
}

contact.favoriteWords = [];
contact.favoriteWords.push("JavaScript", "Developer", "Code");

let reversedName = contact.name.split("").reverse().join("");
console.log(reversedName);

if (contact.email.includes("@email.com")) {
  console.log("Confirmation: Email domain contains @email.com");
}