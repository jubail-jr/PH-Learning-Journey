"use strict";
let sum = 1;
let number = 3
for (let i = 10; i >=1; i--){
     let multiply = number * i;
     console.log(number + "X" + i + "=" + multiply );
     sum = sum * multiply;
}
console.log(sum);