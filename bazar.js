function bazarCalculate(peyazKg , aluKg , telKg) {
    let peyazPerKg = 40;
    let aluPerKg = 40;
    let telPerKg = 170;

    let peyazPrice = peyazKg * peyazPerKg;
    let aluPrice = aluKg * aluPerKg;
    let telPrize = telKg * telPerKg;

    let totalPrice = peyazPrice + aluPrice + telPrize ;

    return totalPrice;

}


let peyaz = 0;
let alu = 0;
let tel = 4;


let totalBazar = bazarCalculate(peyaz, alu, tel);
console.log(totalBazar);
