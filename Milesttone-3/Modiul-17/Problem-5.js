function predictHoisting (keyWord){
    if (keyWord === "var"){
        return `Undefined (hoisted,not initialized)`
    } else if (keyWord === "let" || keyWord === "const"){
        return `ReferenceError (Temporal Dead Zone)`
    } else {
        return "Invalid"
    }
}

console.log(predictHoisting("var"));
console.log(predictHoisting("const"));
console.log(predictHoisting("let"));
console.log(predictHoisting("function"));