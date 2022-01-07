// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {



var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


 
var passwordArray = [];
var userArray = [];

uppercaseArray [1]

  var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
  var numbers = confirm ("you want numbers in your password?");
  var uppercases = confirm ("you want Uppercases in your password?");
  var lowercases = confirm ("you want lowercases in your password?");
  var characters = confirm ("you want special characters in your password?");




if (numbers){
  passwordArray = passwordArray.concat(numbArray);
  
}

if (uppercases){
  passwordArray = passwordArray.concat(uppercaseArray);

}

if (lowercases){
  passwordArray = passwordArray.concat(lowercaseArray);

}

if (characters){
  passwordArray = passwordArray.concat(characterArray);
}
console.log(passwordArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (passwordArray[Math.floor(Math.random() * passwordArray.length)]); 
  }

  return userArray.join("") ;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function copyToClipboard() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);