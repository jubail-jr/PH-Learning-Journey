function cartSummary (cartItems,previewCounst = 2){
    if (!Array.isArray(cartItems) || cartItems.length === 0){
        return "Invalid"
    } 

    const total = cartItems.reduce ((sum,item) => sum + item.price, 0)
    const preview = cartItems.slice(0,previewCounst)

    return {total,preview}
}

let cartPrices = [
    {price: 100},
    {price: 200},
    {price: 300},
]
console.log(cartSummary(cartPrices));
console.log(cartSummary([{price:50}],1));
console.log(cartSummary([]));