// need variables for each of the needed characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specials = "`~!@#$%^&*";
var passLength;
var userPass;
var passCharSet;
var clipboard = new clipboard("copy");

// now to get the DOM elements
var lowercaseSelect = document.getElementById("lowercase");
var uppercaseSelect = document.getElementById("uppercase");
var numberSelect = document.getElementById("numbers");
var specialSelect = document.getElementById("specials");
var passField = document.getElementById("passfield");
var generateButton = document.getElementById("generate-button");
var copyButton = document.getElementById("copy-button");

// now to make a function that will generate using what ever options
// we've selected
function passGen() {
    userPass = "";
    passCharSet = "";

    if (lowercaseSelect.checked) {
        passCharSet += lowercase;
        console.log(lowercaseSelect);
    };
    if (uppercaseSelect.checked) {
        passCharSet += uppercase;
    };
    if (numberSelect.checked) {
        passCharSet += numbers;
    };
    if (specialSelect.checked) {
        passCharSet += specials;
    };
    passLength = Number(passField.length);

    // let's create a loop
    for (var i = 0; i < passLength; i++) {
        userPass += passCharSet.charAt(
            Math.floor(Math.random() * passCharSet.length)
        );
    }
}