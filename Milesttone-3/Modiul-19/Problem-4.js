// Task 4: getTotalStockValue(products) — reduce()
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
// Input:
//  [{ price: 50, stock: 4 }, { price: 20, stock: 10 }]
// Output: 400

const getTotalStockValue = (products) => {
  let total = products.map(products => products.price * products.stock)
  .reduce((acc,value) => acc + value ,0)

  return total
};

let productsInfo = [
  { price: 50, stock: 4 },
  { price: 20, stock: 20 },
];

console.log(getTotalStockValue(productsInfo));