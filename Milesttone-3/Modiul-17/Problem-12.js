const createCartTracker = () => {
    let itemCount = 0;

    const refactorLegacyCart = (items) => {
        if (!Array.isArray(items)) {
            return "Invalid"
        }

        itemCount += items.length

        const names = items.map(item => item.name);
        const total = items.reduce((sum,item) => sum + item.price, 0)

        return `Cart: ${names.join(`, `)} | Total: ${total} Taka`
    }

    refactorLegacyCart.getItemCount = () => itemCount;

    return refactorLegacyCart;
}

const refactorLegacyCart = createCartTracker();

console.log(refactorLegacyCart([{name: "Pen", price: 100}, {name: "Bag", price:250}]));
console.log(refactorLegacyCart([{name: "Cup", price: 80}]));