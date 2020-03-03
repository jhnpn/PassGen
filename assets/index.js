// DOM Elements
var lowercaseSelect = document.getElementById("lowercase");
var uppercaseSelect = document.getElementById("uppercase");
var numberSelect = document.getElementById("numbers");
var specialSelect = document.getElementById("special");
var passLength = document.getElementById("passlength");
var passField = document.getElementById("passfield");
var generateButton = document.getElementById("generate");
var copyButton = document.getElementById("copy-button");

// these functions will be a setup for when we randomly pull out 
// what ever option we choose
function randomLower() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function randomUpper() {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function randomNumber() {
    var numbers = "1234567890";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomSpecial() {
    var specials = "`~!@#$%^&*";
    return specials[Math.floor(Math.random() * specials.length)];
}

// this is will include all those functions into one
const randomSelect = {
    lowercase: randomLower,
    uppercase: randomUpper,
    numbers: randomNumber,
    specials: randomSpecial
};

// for the range slider
output = passLength.value;

passLength.oninput = function() {
    output = this.value;
    console.log(output);
}

// we need the event for the generateButton to function
generateButton.addEventListener("click", function() {
    var length = +passLength.value;
    var isLower = lowercaseSelect.checked;
    var isUpper = uppercaseSelect.checked;
    var isNumber = numberSelect.checked;
    var isSpecial = specialSelect.checked;

    // console.log(isLower, isUpper, isNumber, isSpecial, length); //this will ensure if the checkboxes are working

    passField.textContent = generatePass(isLower, isUpper, isNumber, isSpecial, length);
});

function generatePass(lower, upper, number, special, length) {
    // create a string that will hold the password
    var password = "";

    // find a way to filter out unchecked options
    var marksChecked = lower + upper + number + special;

    var passArray = [{lower}, {upper}, {number}, {special}].filter
    (
        item => Object.values(item)[0]
    );

    if (marksChecked === 0) {
        return "";
    }

    // create a for loop
    for (var i = 0; i < length; i += marksChecked) {
        passArray.forEach(type => {
            var passFunc = Object.keys(type)[0];
            console.log('passFunc: ', passFunc);
            password += randomSelect[passFunc]();
        });
    }

    console.log(password);
}
