// Bug type: ___Syntax Error
function sayHi(name) {
  console.log("Hi, " + name)
}
sayHi("Mira");
 
// Bug type: ___TypeError
let word = "hello";
console.log(word.toUppercase());
 
// Bug type: ___LogicalError
function square(num) {
  return num + num;
}
console.log(square(4));
