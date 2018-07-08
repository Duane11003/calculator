// 1. store value of input and display it in the screen
// 2. once a math button is clicked, clear input screen and perform math equation on 2nd input
// 3. keep doing this until the 'equal' button is pressed
// 4. display calculation result


let result;
let numberKeys = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0
};

// 1. 

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
