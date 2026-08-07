// Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style)
// Given an array of orders { product, unitsSold },
// return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

// Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }]
// Output: "Pen"

const getTopSellingProduct = (orders) => {
  const salesTotals = orders.reduce((acc, order) => {
    acc[order.product] = (acc[order.product] || 0) + order.unitsSold;
    return acc;
  }, {});

  return Object.keys(salesTotals).reduce((topProduct, currentProduct) => {
    return salesTotals[currentProduct] > salesTotals[topProduct]
      ? currentProduct
      : topProduct;
  });
  return salesTotals;
};

const orders = [
  { product: "Pen", unitsSold: 30 },
  { product: "Bag", unitsSold: 12 },
  { product: "Pen", unitsSold: 25 },
  { product: "Bag", unitsSold: 50 },
];

console.log(getTopSellingProduct(orders));
