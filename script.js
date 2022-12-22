//  initial variables include library 
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
  
  // generate password returns completed password
  function generatePassword(){
    
    // character length is converted from a string to an integer and is set to parsedCharacters variable
    var characters = window.prompt("choose a length of at least 8 characters and no more than 128 characters for your password.");
    var parsedCharacters = parseInt(characters)
   
    //  if user entered letters or doesnt fit character length criteria they are asked to, if criteria is met, length is set to initial array characterArr
   if(Number.isNaN(parsedCharacters)){
      window.confirm("please enter an integer between 8 and 128");
      return;
    }else if (parsedCharacters<8 || parsedCharacters>128){
    window.confirm("please enter an integer between 8 and 128")
    return;
    }else{
       (characterArr.length = parsedCharacters)
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

    // confirmed variables are combined
    var concatCase = lowercaseConfirmed.concat(uppercaseConfirmed,numbersConfirmed,specialConfirmed)
    
    // elements in combined array 'concatcase' are shuffled
    let shuffled = concatCase
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
    // shuffled array is set to length of user defined character length
    shuffled.length = +characters
    
    // array elements are combined
    var completeShuffled = shuffled.join("")

    // completeShuffled returns generated password
    return completeShuffled
    
    
    
  }
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

