// Make an array that stores input
// Push new item to the array after user clicks a math symbol (- + / *)
// if user clicks “=", run the calculation function
// if user adds another item to the array, return the calculation and push new item into the array
// once user clicks “=“, run calculation function

let result;
let numberKeys = [1,2,3,4,5,6,7,8,9,0];
// let input = document.getElementById("screen").value;
let numbers = [];
numbers.push(document.getElementById("screen").value);
numbers.forEach(function(element) {
    console.log(element);
    });


document.querySelector("#one").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 1;
});

document.querySelector("#two").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 2;
});

document.querySelector("#three").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 3;
});

document.querySelector("#four").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 4;
});

document.querySelector("#five").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 5;
});

document.querySelector("#six").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 6;
});

document.querySelector("#seven").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 7;
});

document.querySelector("#eight").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 8;
});

document.querySelector("#nine").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 9;
});

document.querySelector("#zero").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value += 0;
});

document.querySelector("#clear").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value = null;
});
