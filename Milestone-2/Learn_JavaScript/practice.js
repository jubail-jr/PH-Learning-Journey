// Task -1

let Mobail = {
    brand : "Infinix",
    model: "Infinix Hot 50 pro",
    price: 18999,
}

for(const key in Mobail){
    const value = Mobail[key]
    console.log(key + ":" + value);
}

// Task-2 

let motorCyle = {
    name : "Discover",
    model : "100CC",
    price : 567000,
}

let motorCylePropertyArr = Object.keys(motorCyle);

for(const key of motorCylePropertyArr){
    const value = motorCyle[key]
    
    console.log(key);
    console.log(value);
}

// Tast -3 

let userInfo = new Object();

userInfo.name = "Jubail";
userInfo.age = 19;
userInfo.proffesion = "Web devloper"

console.log(userInfo);