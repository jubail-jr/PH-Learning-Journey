function mutateOrCopy (data){
    if (data === null || Array.isArray(data)){
        return "Invalid";
    }
    if (typeof data !== "number" && typeof data !== "object"){
        return "Invalid";
    }
    if (typeof data === "number"){
        let copyData = data;
        copyData = 100;
        return `Orginal unaffected: ${data}`
    } 
    if (typeof data === "object"){
        let copyObj = data
        copyObj.value = 100
        return `Orginal Changed: ${data.value} `
    }

}

console.log(mutateOrCopy(10));
console.log(mutateOrCopy({value:10}));
console.log(mutateOrCopy("10"));