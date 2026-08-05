function checkTruthy (value){
    if (value === 0 || value === undefined || value === false || value === null || value === "" || value === NaN){
        return "Falsy"
    } else {
        return "Truthy"
    }
}

console.log(checkTruthy (0));
console.log(checkTruthy (""));
console.log(checkTruthy ([]));
console.log(checkTruthy ({}));
console.log(checkTruthy ("0")); 