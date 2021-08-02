const calculator_key = document.querySelectorAll(".number_key");
const plus_key = document.querySelector(".plus_key");
const minus_key = document.querySelector(".minus_key");
const divid_key = document.querySelector(".divid_key");
const cross_key = document.querySelector(".cross_key");
const answer_key = document.querySelector(".answer_key");
// const calculator_key = document.getElementsByTagName("input");
const userInput = document.querySelector(".display");

let displayNum = "";
let answerNum = "";
let firstNum = "";
let secondNum = "";
let unClick = true;

for (let i = 0; i < calculator_key.length; i++) {
    calculator_key[i].addEventListener("click", () => {
        if (unClick) {
            let key_value = parseInt(calculator_key[i].value, 10);
            firstNum = firstNum + key_value;
            userInput.textContent = firstNum;
            // key_value = "";
        } else {
            let key_value = calculator_key[i].value;
            secondNum = secondNum + parseInt(key_value, 10);
            userInput.textContent = secondNum;
            // key_value = "";
        }
    })
}
plus_key.addEventListener("click", () => {
    userInput.textContent = "+";
    unClick = false;
})
answer_key.addEventListener("click", () => {
    console.log("plus", firstNum, secondNum);
    firstNum = parseInt(firstNum, 10);
    secondNum = parseInt(secondNum, 10);
    answerNum = firstNum + secondNum;
    userInput.textContent = answerNum;
    firstNum = "";
    secondNum = "";
    unClick = true;

})