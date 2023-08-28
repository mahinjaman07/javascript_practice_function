let shoppingCart = [
    {name: 'show', price: 780, quantity:2},
    {name: 'bag', price: 400, quantity:6},
    {name: 'shirt', price: 450, quantity:5},
    {name: 'pant', price: 700, quantity:1},
    {name: 'belt', price: 500, quantity:3},
    {name: 'Sun Glass', price: 200, quantity:4}
];

function totalCost(shopping) {
    let calculatePrice = 0;
    for (let i = 0; i < shopping.length; i++) {
        let allShopping = shopping[i];
        let totalPrice = allShopping.price * allShopping.quantity;
        calculatePrice = calculatePrice + totalPrice;
        
    }
    return calculatePrice;
}

let ajkerShopping = totalCost(shoppingCart);
console.log(ajkerShopping);
