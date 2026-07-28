
function getValueOrDefault (obj,key,defaultValue){

    let arrObj = Object.keys(obj)
    
    if (arrObj.includes(key)){
        return obj[key]
    } else{
        return defaultValue
    }

    
}

let person = {name: "Sam", age: 25,};
console.log(getValueOrDefault(person,"age", 0));
console.log(getValueOrDefault(person,"grade", "N/A"));