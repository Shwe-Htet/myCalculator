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
let firstNum = 0;
let secondNum = 0;
let hadClick = 0;



for (let i = 0; i < calculator_key.length; i++) {
    calculator_key[i].addEventListener("click", () => {
        if (hadClick === 1) {
            let key_value = calculator_key[i].value;
            displayNum = displayNum + parseInt(key_value, 10);
            userInput.textContent = displayNum;
            secondNum = displayNum;
            key_value = 0;
        } else {
            let key_value = calculator_key[i].value;
            displayNum = displayNum + parseInt(key_value, 10);
            userInput.textContent = displayNum;
            firstNum = firstNum + displayNum;
            key_value = 0;
        }

    })
}
plus_key.addEventListener("click", () => {
    userInput.textContent = "";
    userInput.textContent = "+";
    firstNum = 0;
    key_value = 0;
    hadClick = 1;
})
answer_key.addEventListener("click", () => {
    console.log("plus", displayNum);
    firstNum = parseInt(firstNum, 10);
    secondNum = parseInt(secondNum, 10);
    console.log(firstNum + secondNum)
    answerNum = firstNum + secondNum;
    userInput.textContent = answerNum;
    firstNum = 0;
    secondNum = 0;
})