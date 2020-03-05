// DOM Elements
var lowercaseSelect = document.getElementById("lowercase");
var uppercaseSelect = document.getElementById("uppercase");
var numberSelect = document.getElementById("numbers");
var specialSelect = document.getElementById("special");
var passLength = document.getElementById("passlength");
var generateButton = document.getElementById("generate");
var copyButton = document.getElementById("copy-button");

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*"];

// this is going to hold all the character sets
var masterPass = [];


// this is the output for the range slider
output = passLength.value;

passLength.oninput = function() {
    output = this.value;
    console.log(output);
};

generateButton.addEventListener("click", function(event) {
    event.preventDefault();
    var hasLength = passLength.value;
    var isLower = lowercaseSelect.checked;
    var isUpper = uppercaseSelect.checked;
    var isNumber = numberSelect.checked;
    var isSpecial = specialSelect.checked;

    var passField = document.getElementById("passfield").innerText;

    passField = "";

    // 
    if (isLower) {
        for (var i = 0; i < lower.length; i++) {
            masterPass.push(lower[i]);
        }
    };
    
    if (isUpper) {
        for (var i = 0; i < upper.length; i++) {
            masterPass.push(upper[i]);
        }
    };
    
    if (isNumber) {
        for (var i = 0; i < numbers.length; i++) {
            masterPass.push(numbers[i]);
        }
    };
    
    if (isSpecial) {
        for (var i = 0; i < specials.length; i++) {
            masterPass.push(specials[i]);
        }
    };

    for (var i = 0; i < hasLength; i++) {
        var randomIndex = Math.floor(Math.random() * masterPass.length);
        passField = passField + masterPass[randomIndex];
    };

    
    console.log(passField);

    // console.log(isLower, isUpper, isNumber, isSpecial, length); //this will ensure if the checkboxes are working
});


