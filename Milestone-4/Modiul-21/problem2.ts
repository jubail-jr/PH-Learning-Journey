// একটি product-এর নাম, price, এবং availability store করো primitive types use করে।
// Input:
// name = "Laptop"
// price = 45000
// isAvailable = true
// Output:
// Laptop cost 45000 and is available: true


const printProductInfo = (name:string,price:number,isAvailable:boolean):string => {
    return `${name} cost ${price} and is availablbe: ${isAvailable}`
}

console.log(printProductInfo("Laptop",45000,true));