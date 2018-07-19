// Make an array that stores input
// Push new item to the array after user clicks a math symbol (- + / *)
// if user clicks “=", run the calculation function
// if user adds another item to the array, return the calculation and push new item into the array
// once user clicks “=“, run calculation function

// let result;
// let numberKeys = [1,2,3,4,5,6,7,8,9,0];
// // let input = document.getElementById("screen").value;
// let numbers = [];
// numbers.push(document.getElementById("screen").value);
// numbers.forEach(function(element) {
//     console.log(element);
//     });

let screen = document.querySelector("#screen");
let equal = document.querySelector("#equal");
let add = document.querySelector("#addition");
let subtract = document.querySelector("#subtraction");
let divide = document.querySelector("#division");
let multiply = document.querySelector("#multiplication");

// add click event to buttons 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

$(".integer").click(function(){
    let text = $(this).text();
    console.log(text);
});

// $(".clear").click(function(){
//     let text = $(this).text("");
//     console.log(text);
// });


document.querySelector("#clear").addEventListener("click", function() {
    let text = document.querySelector("#screen");
    text.value = null;
});
