// store value of each button sequence before the " - + / x " buttons are pressed
// clear input field after each " - + / x " button is pressed
// perform calculation once " = " button is pressed


let result;
let input = document.querySelector("#screen").value;
let one = document.querySelector("#one").value;

let calculation = {
    add: function(...input){
        result = input += input;
    }
}