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
    // (characterArr.length = characters)
    console.log(typeof characters)
    var lowercaseConfirm = window.confirm("do you want to include lowercase letters?");
    window.alert("confirmed lowercase")
    var uppercaseConfirm = window.confirm("do you want to include Uppercase letters?");
    window.alert("confirmed uppercase")
    var numbersConfirm = window.confirm("do you want to include numbers?");
    window.alert("confirmed numbers")
    var specialConfirm = window.confirm("do you want to include special characters?");
    window.alert("confirmed special characters")
    
    if(lowercaseConfirm == true){
      
      var lowercaseConfirmed = lowercase
    
    }
    if(uppercaseConfirm == true){
      
      var uppercaseConfirmed = uppercase
    
    }
    if(numbersConfirm == true){
      
      var numbersConfirmed = numberCase
    
    }
    if(specialConfirm == true){
      
      var specialConfirmed = specialCharacter
      
    }
    
    var concatCase = lowercaseConfirmed.concat(uppercaseConfirmed,numbersConfirmed,specialConfirmed)
    console.log(concatCase)
    
    let shuffled = concatCase
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
    console.log(shuffled)
    shuffled.length = +characters
    console.log(shuffled)
    var completeShuffled = shuffled.join("")

    console.log(completeShuffled)
    return completeShuffled
    
    // c
    // var shortenedCompleteShuffled = completeShuffled.
    
  }
}
 
  // characterResponse = window.prompt("choose a length of at least 8 characters and no more than 128 characters for your password.");
  // console.log(characterResponse)}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword(){
//   var password = window.prompt("choose a length of at least 8 characters and no more than 128 characters for your password.");
//   console.log(password)
  

// }

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
