function processOrder (orderTotal,onSuccess,onFailure) {
    if (typeof onSuccess !== "function" || typeof onFailure !== "function"){
        return "Invalid"
    }

    if (orderTotal > 0 ){
        return onSuccess (orderTotal)
    }else {
        return onFailure(orderTotal)
    }
}

console.log(processOrder(50000, t=>`Paid ${t}`,t => `Failed`));
console.log(processOrder(-50, t => `Paid ${t}`, t => `Failed`));
console.log(processOrder(500, "x", "y"));