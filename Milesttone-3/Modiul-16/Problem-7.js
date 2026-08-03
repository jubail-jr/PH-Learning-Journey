function manageInventoryObject(obj, action) {


    if (
        obj === null ||
        typeof obj !== "object" ||
        Array.isArray(obj) ||
        Object.getPrototypeOf(obj) !== Object.prototype
    ) {
        return "Invalid";
    }

    if (action === "keys") {
        return Object.keys(obj);
    }

    if (action === "values") {
        return Object.values(obj);
    }

    if (action === "entries") {
        return Object.entries(obj);
    }

    if (action === "seal") {
        return Object.seal(obj);
    }

    if (action === "freeze") {
        return Object.freeze(obj);
    }

    for(const item in obj){
        if (`delete:${item}` === action){
           delete obj[item]

            return obj
        }
    }
    return "Invalid"

    
}

console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:c"))
console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"))
console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"))
console.log(manageInventoryObject({a:1,b:2,c:3}, "values"))
console.log(manageInventoryObject({a:1}, "shrink"))
