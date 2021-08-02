const calculator_key = document.querySelectorAll(".number_key");
const plus_key = document.querySelector(".plus_key");
const minus_key = document.querySelector(".minus_key");
const divided_key = document.querySelector(".divided_key");
const cross_key = document.querySelector(".cross_key");
const answer_key = document.querySelector(".answer_key");
const userInput = document.querySelector(".display");

let displayNum = "";
let answerNum = "";
let firstNum = "";
let secondNum = "";
let unClick = true;
let plus = false;
let minus = false;
let divided = false;
let multiply = false;

for (let i = 0; i < calculator_key.length; i++) {
    calculator_key[i].addEventListener("click", () => {
        if (unClick) {
            let key_value = parseInt(calculator_key[i].value, 10);
            firstNum = firstNum + key_value;
            userInput.textContent = firstNum;
        } else {
            let key_value = calculator_key[i].value;
            secondNum = secondNum + parseInt(key_value, 10);
            userInput.textContent = secondNum;
        }
    })
}
plus_key.addEventListener("click", () => {
    userInput.textContent = "+";
    unClick = false;
    plus = true;
})
minus_key.addEventListener("click", () => {
    userInput.textContent = "-";
    unClick = false;
    minus = true;
})
cross_key.addEventListener("click", () => {
    userInput.textContent = "x";
    unClick = false;
    multiply = true;
})
divided_key.addEventListener("click", () => {
    userInput.textContent = "/";
    unClick = false;
    divided = true;
})

answer_key.addEventListener("click", () => {

    firstNum = parseInt(firstNum, 10);
    secondNum = parseInt(secondNum, 10);

    if (plus) {
        answerNum = firstNum + secondNum;
        userInput.textContent = answerNum;
        plus = false;
    } else if (minus) {
        answerNum = firstNum - secondNum;
        userInput.textContent = answerNum;
        minus = false;
    } else if (divided) {
        answerNum = firstNum / secondNum;
        userInput.textContent = answerNum;
        divided = false;
    } else if (multiply) {
        answerNum = firstNum * secondNum;
        userInput.textContent = answerNum;
        multiply = false;
    }
    firstNum = "";
    secondNum = "";
    unClick = true;
})