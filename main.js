$(document).ready(function() {
    var input1 = 0;
    var input2 = '0';
    var operation = null;
    var prevEntry = 0;
    updateScreen(input1);
    
    $('.integer').on('click', function(evt) {
      var buttonPressed = $(this).html();
      console.log(buttonPressed);
      
        if(buttonPressed === "AC"){
          input1 = 0;
          input2 = '0';
        } else if (isNumber(buttonPressed)) {
        if (input2 === '0') input2 = buttonPressed;
        else input2 = input2 + buttonPressed;
      } else if (isOperator(buttonPressed)) {
        prevEntry = parseFloat(input2);
        operation = buttonPressed;
        input2 = '';
       } else if (buttonPressed === "."){
         input2 += '.';
       } else if (buttonPressed === '=') {
        input2 = operate(prevEntry, input2, operation);
        operation = null;
      }
      
      updateScreen(input2);
    });
   });
   
   updateScreen = function(displayValue) {
    var displayValue = displayValue.toString();
    $('#screen').html(displayValue.substring(0));
   };
   
   isNumber = function(value) {
    return !isNaN(value);
   }
   
   isOperator = function(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
   };
   
   operate = function(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
   }

 