function createOrderCounter (){
    let counter = 0;

    return function (){
        counter ++
        return counter
    }
}

const c1 = createOrderCounter();
const c2 = createOrderCounter();
console.log(c1());
console.log(c1());
console.log(c2());