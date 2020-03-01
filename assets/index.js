// need variables for each of the needed characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specials = "`~!@#$%^&*";

// grab values from different elements and  divs
var lowercaseSelect = document.getElementById("lowercase");
var uppercaseSelect = document.getElementById("uppercase");
var numberSelect = document.getElementById("numbers");
var specialSelect = document.getElementById("specials");
var passField = document.getElementById("passfield");
var generateButton = document.getElementById("generate-button");
var copyButton = document.getElementById("copy-button");

// now we need a  function that will generate the password
function 