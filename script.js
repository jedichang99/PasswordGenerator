// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
  }
}