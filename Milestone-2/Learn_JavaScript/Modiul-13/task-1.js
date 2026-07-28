//Problem Statement:
// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.

function checkiTemperature (temp){
    if(temp >=30){
        return "Hot"
    } else if (temp >= 15){
        return "Normal"
    } else{
        return "Cold"
    }
}
console.log(checkiTemperature(35));
console.log(checkiTemperature(10));
console.log(checkiTemperature(20));
