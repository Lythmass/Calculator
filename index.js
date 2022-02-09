const numButtons = document.querySelectorAll(".grid-container > div");
const output = document.querySelector(".previous-output");
const textField = document.querySelector(".current-output");

let number = 0;
let currentNum = '';
let operatorEntered = '';
let previousNum = 0;

const operators = {
     "plus": '+',
     "minus": '-',
     "mult": '*',
     "divide": '/'
}
let calculate = '';
let clickedOperator = '';
//When Clicked any button
numButtons.forEach(function(numButton) {
     numButton.addEventListener("click", function() {
          //Check if user clicked any button
          if(this.className[0]*1 + 10 >= 10) {
               addNum(this.className[0]);
          } else {
               //If the user clicked clear all button
               if(this.className == "clear") clear();

               //If the user clicked delete button
               if(this.className == "del") deleteOne();

               //if the user clicked an operator symbol
               for(var i = 0; i < 4; i++) {
                    if(this.className == Object.keys(operators)[i]) calculate = calculate + Object.values(operators)[i];
               }
          }
          if(this.className != "clear" && this.className != "del") {
               textField.innerText = calculate;
          }
          if(this.className == "equals") {
               textField.innerText = output.innerText;
               calculate = output.innerText;
          }
     });
});

//Input Numbers
function addNum(clickedButton) {
     calculate = calculate + clickedButton;
     output.innerText = eval(calculate);
}

//Delete a single integer
function deleteOne() {
     calculate = calculate.substring(0, calculate.length - 1);
     if(calculate[calculate.length -1]*1 + 10 >= 10) {
          output.innerText = eval(calculate);
     }
     textField.innerText = textField.innerText.substring(0, textField.innerText.length - 1);
     if(textField.innerText.length == 0) {
          textField.innerText = '0'; output.innerText = '0';
     }
}

//Clear Everything
function clear() {
     calculate = '';
     textField.innerText = '0';
     output.innerText = '0';
}
