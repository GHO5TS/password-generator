// Assignment Code
var generateBtn = document.querySelector("#generate");


var numberOfCharacters = 0;
var specialCharactersAllowed = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+"];
var numbersAllowed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercaseAllowed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAllowed = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Write password to the #password input
function askHowManyCharacters(){
  var numberOfCharacters = window.prompt ("How many characters do you want?")
  console.log(numberOfCharacters);
  askForSpecialCharacters();
}
   
function askForSpecialCharacters(){
  var needSpecialChar = window.confirm ("Do you want special Characters?")
  console.log(needSpecialChar);
  askForNumbers();
}

function askForNumbers(){
  var needNumbers = window.confirm ("Do you want numbers?")
  console.log(needNumbers);
  askForLowercase();
}

function askForLowercase(){
  var needLowercase = window.confirm ("Do you want lowercase letters?")
  console.log(needLowercase)
  askForUppercase();
}

function askForUppercase(){
  var needUppercase = window.confirm ("Do you want uppercase letters")
  console.log(needUppercase);
  generatePassword();
}

function generatePassword(){
  var finalPassword = "";
  var randomSpecialCharacters = askForSpecialCharacters ();
  var randomNumbers = askForNumbers ();
  var randomLowercase = askForLowercase ();
  var randomUppercase = askForUppercase ();
  var numberOfCharacters = askHowManyCharacters (); 
  validation(numberOfCharacters, needSpecialChar, needNumbers, needLowercase, needUppercase)
  return finalPassword;
}
function validation(numberOfCharacters, needSpecialChar, needNumbers, needLowercase, needUppercase){
  window.confirm("Are these correct")
  if (numberOfCharacters >= 8 || numberOfCharacters <= 128)
    if (needSpecialChar === true || needNumbers === true || needLowercase === true || needUppercase === true)
  console.log("lets go!!!");
  buildPassword()
}

function buildPassword(){
  var allCharacters = ""
  if (needSpecialChar === true) {allCharacters = allCharacters.concat(specialCharactersAllowed)}
  if (needNumbers === true) {allCharacters = allCharacters.concat(numbersAllowed)}
  if (needLowercase === true) {allCharacters = allCharacters.concat(lowercaseAllowed)}
  if (needUppercase === true) {allCharacters = allCharacters.concat(uppercaseAllowed)}
console.log(allCharacters)
}

function shuffleArray(allCharacters) {
  var randomPassword = allCharacters.sort(() => Math.random() - 0.5);
  console.log(randomPassword)
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generate.addEventListener("click", askHowManyCharacters);{

  // function generatePassword(){
  // var finalPassword = "";
  // var numberOfCharacters = askHowManyCharacters 
  // }
}




// var randomSpecialCharachters = Math.floor(Math.random() * specialCharactersAllowed.length);
// var randomNumbers = Math.floor(Math.random() * numbersAllowed.length);
// var randomLowercase = Math.floor(Math.random() * lowercaseAllowed.length);
// var randomUppercase = Math.floor(Math.random() * specialCharactersAllowed.length)
