function filterProducts (products,action){

    if (!Array.isArray(products)){
        return "Invalid"
    }

    if (action === "names"){
        return products.map(product => product.name)
    } else if (action === "cheap"){
        return products.filter(product => product.price < 500)
    } else if (action === "firstExpensive"){
        return products.find (product => product.price > 1000)
    } else {
        return "Invalid"
    }
}

let productsInfo = [
    {name: "pen", price: 20,},
    {name: "Tv", price:1500}
]

console.log(filterProducts(productsInfo,"names"));
console.log(filterProducts(productsInfo, "cheap"));
console.log(filterProducts(productsInfo,"firstExpensive"));
console.log(filterProducts("x","names"));
console.log(filterProducts(productsInfo, "the"));