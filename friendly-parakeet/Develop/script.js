// Assignment code here
/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password 
THEN I am presented with a series of prompts for password criteria 
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters - 1 num-chars
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters - 2 char-types
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria - 3 gen-pwd
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page - 4 display
*/


var getLen = function(){
  var myLen = window.prompt("Select a number between 8 and 128 for your password length");

  var numbers= /^[0-9]\d*$/;
  if (myLen.match(numbers) && (myLen >=8 && myLen<=128)) {
  }else{
    alert("Please enter an integer between 8-128.");
    return getLen();
  }

  return myLen;
}

//creating character types
var getCharTypes = function(){
  //creating character types array set as none
  var myCharTypes = new Array();
  myCharTypes[0] = "no"; //upper case
  myCharTypes[1] = "no"; // lower case
  myCharTypes[2] = "no"; //numeric
  myCharTypes[3] = "no"; // special

  // setting temporary variable if true confirm character type
  var temp=window.confirm("Would you like to include upper case letters?");
  if (temp === true) {
    myCharTypes[0] = "yes";
  }
  temp=window.confirm("Would you like to include lower case letters?");
  if (temp === true) {
    myCharTypes[1] = "yes";
  }
  temp=window.confirm("Would you like to include numeric values?");
  if (temp === true) {
    myCharTypes[2] = "yes";
  }
  temp=window.confirm("Would you like to include special characters?");
  if (temp === true) {
    myCharTypes[3] = "yes";
  }

  //if selected no for all char types, then a message you must pick one will pospulate
  temp=false;
  for ( i=0; i<myCharTypes.length; i++ ){
    if (myCharTypes[i]=="yes"){
      temp=true;
      break;
    }
  }
  if (temp==false) {
    alert("You must select at least one char type");
    return getCharTypes();
  }

  return myCharTypes;
}



//choosing the length of characters
var generatePassword = function() {
  // ask for password length
  var pwdLen = getLen();
  console.log("Your password length will be " + pwdLen);
  
  // ask for character types to be included
  var charTypes = getCharTypes();
  console.log("You have selected the following character types: " + charTypes);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
