const calculateTotal = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }

  return `Total: ${total}Taka`

}

console.log(calculateTotal([{price:100},{price:250}]));
console.log(calculateTotal([{price:80}]));