function duplicateNumber(number) {
    let removeNumber = [];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (removeNumber.includes(element)=== false) {
            removeNumber.push(element)
        }
        
    }
    return removeNumber;
}

let numbers = [10, 20, 30, 40, 50, 10, 40, 30, 10, 20, 50, 40];
let removeDuplicateNumber = duplicateNumber(numbers);
console.log(removeDuplicateNumber);