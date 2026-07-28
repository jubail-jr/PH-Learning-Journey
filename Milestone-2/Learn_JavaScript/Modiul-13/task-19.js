
function invertObject (obj){
    let inveret = {}
    let keysArr = Object.keys(obj);
    let valuesArr = Object.values(obj);

    for (let i = 0; i<keysArr.length; i++){
        inveret[valuesArr[i]] = keysArr[i]
    }
    return inveret;
}

let object = {
    a:1,
    b:2,
    c:3,
}
console.log(invertObject(object));