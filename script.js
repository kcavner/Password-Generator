  var lowercase = ["a","b","c","d","e","f","g","h","i","j","b","c","d","e","f","g","h","i","j","c","d","e","f","g","h","i","j","f","g","h","i","j"]
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'F', 'G', 'H', 'I', 'J', 'H', 'I', 'J']
  var numberCase = ["1","2","3","4","5","6","7","8","9","2","3","4","5","6","7","8","9","2","3","4","5","6","7","8","9","2","3","4","5","6","7","8","9","2","3","2","3"]
  var specialCharacter = ["!","@","#","$","%","^","&","*","@","#","$","%","^","&","*","@","#","$","%","^","&","*","@","#","$","%","^","&","*","@","#","$","%","@",]
  var characterArr = []

  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  function generatePassword(){
    var characters = window.prompt("choose a length of at least 8 characters and no more than 128 characters for your password.");
    var parsedCharacters = parseInt(characters)
   
   
   if(Number.isNaN(parsedCharacters)){
      window.confirm("please enter an integer between 8 and 128");
      return;
    }else if (parsedCharacters<8 || parsedCharacters>128){
    window.confirm("please enter an integer between 8 and 128")
    return;
    }else{
       (characterArr.length = parsedCharacters)
    }
   
    
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
    
    var concatCase = lowercaseConfirmed.concat(uppercaseConfirmed,numbersConfirmed,specialConfirmed)
    
    let shuffled = concatCase
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
    shuffled.length = +characters
    
    var completeShuffled = shuffled.join("")

    
    return completeShuffled
    
    
    
  }
}
 

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
