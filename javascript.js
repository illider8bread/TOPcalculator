let total;

function addition(a, b) {
    total = a + b;
    return total;
};
function subtraction(a, b) {
    total = a - b;
    return total;
}
function multiplication(a, b) {
    total = a * b;
    return total;
}
function division(a, b) {
    total = a / b;
    return total;
}

let firstValue = 0;
let secondValue = 0;
let operator;
console.log(operator);

function operation(input){
    inputInt = parseInt(input);
    if(inputInt == NaN) {
        operator = input;
    } else if (operator === undefined){
        firstValue += inputInt;
        console.log(`First Value is ${firstValue}`)
    } else if((operator === "+")||
    (operator === "-")||
    (operator === "/")||
    (operator === "/")){
        secondValue += inputInt;
    } else {
        return "ERROR";
    } 
};

operation("+");