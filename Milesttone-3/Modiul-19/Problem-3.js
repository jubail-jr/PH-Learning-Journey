// Task 3: findProductByName(products, name) — find()
// Given an array of product objects, return the first product matching the given name, or undefined if not found.
// Input:
// products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag"
// Output:
// { name: "Bag", price: 500 }

const findProductByName = (products, name) => {
    
    let findProduct = products.find((product) => {
        return product.name === name
    })
    return findProduct
};

let productInfo = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 500 },
];

console.log(findProductByName(productInfo, "Bag"));