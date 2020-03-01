// DOM Elements
var lowercaseSelect = document.getElementById("lowercase");
var uppercaseSelect = document.getElementById("uppercase");
var numberSelect = document.getElementById("numbers");
var specialSelect = document.getElementById("specials");
var passField = document.getElementById("pass-field");
var generateButton = document.getElementById("generate-button");
var copyButton = document.getElementById("copy-button");

// these functions will randomly pull out what ever option we choose
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


console.log(randomSpecial());