let total;

function addition(a,b){
    total = a + b;
    return total;
};
function subtraction(a,b){
    total = a - b;
    return total;
}
function multiplication(a,b){
    total = a * b;
    return total;
}
function division(a,b){
    total = a / b;
    return total;
}

let inputArray = [];

function input(){
    let btnValue = this.textContent;
    inputArray.push(btnValue);
};

let allButtons = document.querySelectorAll(".btn");

allButtons.addEventListener('click', input());

function equalsBtn(array) {
    
};