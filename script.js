//  initial variables include library 
  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var numberCase = ["1","2","3","4","5","6","7","8","9","0"]
  var specialCharacter = ["!","@","#","$","%","^","&","*"]
  var characterConfirmArr = []
  
  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// student code
 // generate password returns completed password
function generatePassword(){
    
  // character length is converted from a string to an integer and is set to parsedCharacters variable
  var characters = window.prompt("choose a length of at least 8 characters and no more than 128 characters for your password.");
  var parsedCharacters = parseInt(characters)
 
  //  checks if user entered letters or doesnt fit character length criteria they are asked to. if criteria is'nt met, returns function
  if(Number.isNaN(parsedCharacters)){
    window.confirm("please enter an integer between 8 and 128");
    return;
  }else if (parsedCharacters<8 || parsedCharacters>128){
    window.confirm("please enter an integer between 8 and 128")
    return;
  }
 
  // checks if criteria is true and if so, initial criteria arrays are set to a confirmed variable
  var lowercaseConfirm = window.confirm("do you want to include lowercase letters?");
  if(lowercaseConfirm == true){
    var lowercaseConfirmed = lowercase
    window.alert("confirmed lowercase... i respect that")
  }else{
    window.alert("no lowercase... ok then")
  }
  var uppercaseConfirm = window.confirm("do you want to include Uppercase letters?");
  if(uppercaseConfirm == true){
    var uppercaseConfirmed = uppercase
    window.alert("confirmed uppercase... big fan")
  }else{
    window.alert("no uppercase... excelent taste")
  }
  var numbersConfirm = window.confirm("do you want to include numbers?");
  if(numbersConfirm == true){
    var numbersConfirmed = numberCase
    window.alert("confirmed numbers... now we're cooking")
  }else{
    window.alert("no numbers... who needs 'em?")
  }
  var specialConfirm = window.confirm("do you want to include special characters?");
  if(specialConfirm == true){
    var specialConfirmed = specialCharacter
    window.alert("confirmed special characters... i love these little guys")
  }else{
    window.alert("no special characters... they're not that special anyways.")
  }
  
  // checks if no criteria was selected and if so; returns function.
  if (uppercaseConfirm,specialConfirm,numbersConfirm,lowercaseConfirm == false){
    window.confirm("please select criteria")
  return;
  }

  // confirmed variables are combined into array concatCase
  var concatCase = lowercaseConfirmed.concat(uppercaseConfirmed,numbersConfirmed,specialConfirmed)
  
  
  // loop through character length and pushes random confirmed elements to a password array
  for (let i =0;i<parsedCharacters;i++){
    let character = concatCase[Math.floor(Math.random() * concatCase.length)]
    characterConfirmArr.push(character)
  }
 
  // array elements are combined
  var completeShuffled = characterConfirmArr.join("")
  
  // completeShuffled returns generated password
  return completeShuffled
  }

