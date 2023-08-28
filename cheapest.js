let shopPhones = [
    {name:'samsiung',camera: 13, Storage:64, price: 22000,color:'goldren'},
    {name:'I Phone',camera: 13, Storage:64, price: 18000,color:'goldren'},
    {name:'Oppo',camera: 13, Storage:64, price: 66000,color:'goldren'},
    {name:'HTC',camera: 13, Storage:64, price: 50400,color:'goldren'},
    {name:'Walton',camera: 13, Storage:64, price: 21000,color:'goldren'},
    {name:'Xiaomi',camera: 13, Storage:64, price: 36000,color:'goldren'},
    {name:'Redmi',camera: 13, Storage:64, price: 16000,color:'goldren'},
];

function cheapestPricePhone(phones) {
    let buyPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < buyPhone.price) {
            buyPhone = phone; 
        }
    }
    return buyPhone;
}

let getPhone = cheapestPricePhone(shopPhones);
console.log(getPhone); 





