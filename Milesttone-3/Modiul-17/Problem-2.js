
function describeMissingValue (fieldValue){
    if (fieldValue === undefined){
        return `Field was never set`
    } else if (fieldValue === null){
        return `Field intentionally left empty`
    } else {
        return `Field has value: ${fieldValue}`
    }
}
console.log(describeMissingValue(undefined));
console.log(describeMissingValue(null)); 
console.log(describeMissingValue("Jubail"));  
console.log(describeMissingValue(0));  