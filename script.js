// Assignment Code
const keys = {
  //generateBtn = document.querySelector("#generate")
  uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
  numbersAll: "1234567890",
  specialCharactersAll: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}




function generatePassword(choices) {
  var newPassword = "";
  //TODO Step 2
// choices = "un"
// loop through password length

  // randomly choose letter from "un". Ex: It will be 'u' or 'n'
  // based on this letter, check for 'u', 'l', 'n', or 's'
  // do if statements 

    // randomly choose letter from uppercaseLetters or numbersAll
    // add letter into string
    // return that string

const getKey = [
  function upperCase() {
    return keys.uppercaseLetters[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowercaseLetters[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.numbersAll[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.specialCharactersAll[Math.floor(Math.random() * keys.symbol.length)];
  }
]


  return newPassword;
}
// Write password to the #password input
function writePassword() {
  var choices = "";
  // TODO Step 1
  // check which boxes have been selected
  // add letter to choices


  var password = generatePassword(choices);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", showForm);

//hidden form
function showForm(){
  document.getElementById("form").hidden=false;
}

function validateForm(){
  var invalidInputs=[];
  var passwordLength=document.forms["form"]["passwordLength"].value;
  if (passwordLength<8 || passwordLength>128){
    invalidInputs.push ("Password length needs to be more than 8 and less that 128 characters");
  }
  var lowercase=document.getElementById("lowercase");
  var uppercase=document.getElementById("uppercase");
  var numbers=document.getElementById("numbers");
  var specialCharacters=document.getElementById("specialCharacters");
  if (!(lowercase.checked) && !(uppercase.checked) && !(numbers.checked) && !(specialCharacters.checked)){
    invalidInputs.push ("Please seclect at least one charractor type.");
  }
  if (invalidInputs.length>0){
    window.alert(invalidInputs);
    return;
  }
  const password = document.getElementById("password");
  const length = document.getElementById("length");
  let pass = "";
  while (length.value > pass.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let letsChecked = document.getElementById(keyToAdd.name).checked;
    if (letsChecked) {
      pass += keyToAdd();
    }
  }
  password.innerHTML = pass;
  
}
writePassword();