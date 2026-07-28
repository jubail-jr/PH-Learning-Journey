// Write a function listKeys that takes an object and returns an array containing its property names (keys).

function listKeys (object){
    let keys = [];
    
    for (const key in object){
        keys.push(key)
    }
    return keys
}

let keysObject = {
    name: "Sam",
    age: 25,
    city: "Dhaka",
}
console.log(listKeys(keysObject));