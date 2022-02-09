const numButtons = document.querySelectorAll(".grid-container > div");
const output = document.querySelector(".previous-output");
const textField = document.querySelector(".current-output");

let number = 0;
let currentNum = '';
let operatorEntered = '';

const operators = {
     "plus": '+',
     "minus": '-',
     "mult": '*',
     "divide": '/',
     Calculate: function(num1, operator, num2) {
          return eval(num1 + operator + num2);
     }
}
//When Clicked any button
numButtons.forEach(function(numButton) {
     numButton.addEventListener("click", function() {
          //Check if the button is the integer type
          if(this.className[0]*1 + 10 >= 10) {
               addNum(this.className[0]);
          } else {
               //If user clicked clear all button
               if(this.className == "clear") {
                    clear();
               }
               //If user clicked delete button
               if(this.className == "del") {
                    deleteOne();
               }
               if(this.className != "del" && this.className != "clear" && this.className) {
                    if(output.innerText == '0') {
                         output.innerText = '';
                    }
               }
               //If user clicked any operator button
               for(var j = 0; j < 4; j++) {
                    if(this.className == Object.keys(operators)[j]) {
                         operatorEntered = Object.keys(operators)[j];
                         if(operatorEntered == "divide") {
                              textField.innerText = textField.innerText + " ÷ ";
                         } else {
                              textField.innerText = textField.innerText + " " + Object.values(operators)[j] + " ";
                         }
                         output.innerText = number;
                         currentNum = '';
                    }
                    if(this.className == "equals") {
                         textField.innerText = number;
                         currentNum = '';
                    }
               }
          }
     });
});

//Input Numbers
function addNum(clickedButton) {
     if(textField.innerText[0] == '0') {
          textField.innerText = '';
     }
     textField.innerText = textField.innerText + clickedButton;
     currentNum = currentNum + clickedButton;
     if(operatorEntered.length != 0) {
          for(var i = 0; i < 4; i++) {
               if(Object.keys(operators)[i] == operatorEntered) {
                    number = operators.Calculate(output.innerText.toString(), Object.values(operators)[i], currentNum);
                    output.innerText = number;
               }
          }
     } else {
          number = currentNum;
     }

}

//Delete a single integer
function deleteOne() {
     textField.innerText = textField.innerText.substring(0, textField.innerText.length - 1);
     // output.innerText = output.innerText.substring(0, output.innerText.length - 1);
     currentNum = currentNum.substring(0, currentNum.length - 1);
     if(textField.innerText.length == 0) {
          textField.innerText = '0';
     }
}

//Clear Everything
function clear() {
     textField.innerText = '0';
     output.innerText = '0';
     number = 0;
     currentNum = '';
     operatorEntered = '';
}
