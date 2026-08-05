function compareValues (a,b){
    let obj = {}

    obj.loose = (a == b);
    obj.strict = (a===b);
    return obj
}

console.log(compareValues (5,"5"));
console.log(compareValues (0,false));
console.log(compareValues ("5",5));
console.log(compareValues (null,undefined));
console.log(compareValues (7,7));
