function classifyDataType (value){

    if (value === null){
        return "Premitive"
    }

    if (typeof value !== "function" && typeof value !== "object"){
        return "Premitive"
    } else {
        return "Non-Premitive"
    }
}

console.log(classifyDataType(25));
console.log(classifyDataType("hi"));
console.log(classifyDataType([1,2,3]));
console.log(classifyDataType({a:1}));
console.log(classifyDataType(""));