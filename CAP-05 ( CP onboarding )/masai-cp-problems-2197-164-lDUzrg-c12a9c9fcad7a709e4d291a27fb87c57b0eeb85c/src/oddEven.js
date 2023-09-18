// Getting all the HTML elements
let numDiv = document.querySelector("#number")
let oddEvenDiv = document.querySelector("#odd-even")

let ranNum; 

// generate a random integer(hint : Math.random)
function generateNumber() {
  ranNum = Math.round(Math.random()*100)
  numDiv.innerHTML = ranNum;
  checkOddEven(ranNum)
}

let generateBtn = document.querySelector('#generate-number')
generateBtn.addEventListener('click', ()=> {
  generateNumber()
});

function checkOddEven(num) {
  // logic for even / odd
  if(num%2==0) {
    oddEvenDiv.innerHTML = 'Even'
  } else oddEvenDiv.innerHTML = 'Odd'
}

window.onload = function () {
  // add event listeners to the button here
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
