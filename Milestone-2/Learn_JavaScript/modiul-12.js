//Task-1
let requestedAmount = 300500;
let accountBalance = 500000;
let withdrawInfo = {

}

function withdrawMoney (reqAmount,accBalance){
    let message;
    if (reqAmount > accBalance){
         message = "Insuffient Balance"
         return message
    } else if ( reqAmount % 500 !== 0) {
        message = "Amount must be a multiple of 500"
        return message
    } else{
        let OneThousandNotes = parseInt(reqAmount / 1000) ;
        let fiveHundredNotes = (reqAmount % 1000)/500; 
        withdrawInfo.status = "Success";
        withdrawInfo.thousandNotes = OneThousandNotes;
        withdrawInfo.fiveHundredNote = fiveHundredNotes;
        withdrawInfo.reamainingBalance = accBalance - reqAmount;
    }
    return withdrawInfo
}

let receipt = withdrawMoney(requestedAmount,accountBalance);

console.log(receipt);

// Task-2

let products = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pant", price: 1800, quantity: 1 },
  { name: "Shoes", price: 3000, quantity: 1 }
]
let paymentInfo = {

}


function processShoppingList (items){
    let subTotal = 0;
    for(let i = 0; i<items.length; i++){
      let  productPrice = items[i].price * items[i].quantity

        subTotal += productPrice
    }
    let discount = 0;
    if (subTotal > 5000){
        discount = (subTotal*15)/100;
    }
    let finalPayableAmount = subTotal - discount
    paymentInfo.subTotal = subTotal
    paymentInfo.discountAmount = discount;
    paymentInfo.finalPayableAmount = finalPayableAmount

    return paymentInfo
}

let paymentReceipt = processShoppingList(products);

console.log(paymentReceipt);

// Task-3

let productInfo = [
    {
        title: "Mobile",
        price: 15000,
        isAvailable: true,
    },
    {
        title: "Cover",
        price: 300,
        isAvailable: true,
    },
    {
        title: "Laptop",
        price: 65000,
        isAvailable: false,
    },
    {
        title: "Watch",
        price: 3500,
        isAvailable: true,
    }
];

function findPremiumProducts (products) {
    let newArr = [];
    for(let i = 0; i<products.length; i++){
        if( products[i].price > 2000 && products[i].isAvailable === true){
            newArr.push(products[i].title)
        }
    }
    return newArr;
};

let result = findPremiumProducts(productInfo);
console.log(result);



// Task-4

const carts = [
  { name: "Laptop", price: 50000, quantity: 1, category: "electronics" },
  { name: "Shirt", price: 1200, quantity: 2, category: "clothing" },
  { name: "Mouse", price: 500, quantity: 2, category: "electronics" }
];

function calculateFinalInvoice(cart, couponCode){
    let reciept = {}
    let totalPrice = 0;
    let subTotal = 0;
    let discount = 0;
    let totalTax = 0;
    for (let i = 0; i<cart.length ; i++){
        totalPrice += cart[i].price * cart[i].quantity;
        subTotal += cart[i].price * cart[i].quantity

        if(cart[i].category === "electronics"){
            tax = (cart[i].price * cart[i].quantity) * 0.05;
            totalTax += tax
            totalPrice += tax;
        }

        if (couponCode === "SAVE10"){
            discount = totalPrice * 0.10;
        } else if (couponCode === "FREESHIP"){
            discount = 500;
        }
        
    }
    totalPrice -= discount;
    
    reciept.subTotal = subTotal;
    reciept.tax = totalTax;
    reciept.discount = discount;
    reciept.totalPayable = totalPrice

    return reciept
};

let result4 = calculateFinalInvoice(carts,"FREESHIP");
console.log(result4);

// Task-5

const userAccount = {
  accountHolder: "  jR JuBaIl  ",
  accountType: "savings",
  balance: 100000,
  transactions: [
    { type: "deposit", amount: 500000, category: "salary", note: " Monthly Salary " },
    { type: "expense", amount: 200000, category: "shopping", note: " Clothes " },
    { type: "expense", amount: 150000, category: "food", note: " Restaurant Bill " }
  ]
};
// 1
function formatAccountDetails(account){
    let cleanAccountHolder = account.accountHolder.toUpperCase().trim()
    let stringMessage = "Account Holder: " + cleanAccountHolder + " | " + "Current Balance: " + account.balance + " BDT";
    return stringMessage;
};

let accountDetails = formatAccountDetails(userAccount);
console.log(accountDetails);

// 2

function addTransaction(transactionAccount){
    let newObj = {}
    newObj.totalDeposit = 0;
    newObj.totalExpense = 0;
    for(let i = 0; i < transactionAccount.length; i++){
        if(transactionAccount[i].type === "deposit"){
            userAccount.balance += transactionAccount[i].amount
            newObj.newBalance = userAccount.balance
            newObj.totalDeposit += transactionAccount[i].amount
        }
        if (transactionAccount[i].type === "expense"){
            if(transactionAccount[i].amount <= userAccount.balance){
                
                userAccount.balance -= transactionAccount[i].amount
                newObj.newBalance = userAccount.balance
                newObj.totalExpense += transactionAccount[i].amount
            } else{
                let insBalaceMessage = `Warning: Expense '${transactionAccount[i].note.trim()}' skipped due to insufficient balance!`;
                console.log(insBalaceMessage);
            }
        }
    }
    return newObj;
}
let accountTransaction = addTransaction(userAccount.transactions);
console.log(accountTransaction);

