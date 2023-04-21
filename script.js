// Assignment Code
const keys = {
  //generateBtn = document.querySelector("#generate")
  uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
  numbersAll: "1234567890",
  specialCharactersAll: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", // Removed empty space so PW doesn't have an empty string
};
// Move getKey array out of generatePassword so it can be accessed globally, also removed generatePassword and writePassword;
// Make sure to use the right dot notation to access the keys object (keys.uppercaseLetters instead of keys.upperCase);
// Match the functions' name with its respective IDs (function upperCase respective IDs should be id="upperCase");
const getKey = [
  function upperCase() {
    return keys.uppercaseLetters[
      Math.floor(Math.random() * keys.uppercaseLetters.length)
    ];
  },
  function lowerCase() {
    return keys.lowercaseLetters[
      Math.floor(Math.random() * keys.lowercaseLetters.length)
    ];
  },
  function numbers() {
    return keys.numbersAll[Math.floor(Math.random() * keys.numbersAll.length)];
  },
  function specialCharacters() {
    return keys.specialCharactersAll[
      Math.floor(Math.random() * keys.specialCharactersAll.length)
    ];
  },
];
function showForm() {
  document.getElementById("form").hidden = false;
}
function validateForm(event) {
  event.preventDefault();
  var invalidInputs = [];
  var passwordLength = Number(document.forms["form"]["passwordLength"].value); // passwordLength previously returned a number value as a string, change its type to number
  if (passwordLength < 8 || passwordLength > 128) {
    invalidInputs.push(
      "Password length needs to be more than 8 and less that 128 characters"
    );
  }
  var lowercase = document.getElementById("lowerCase"); // Selectors are case sensitive
  var uppercase = document.getElementById("upperCase");
  var numbers = document.getElementById("numbers");
  var specialCharacters = document.getElementById("specialCharacters");
  if (
    !lowercase.checked &&
    !uppercase.checked &&
    !numbers.checked &&
    !specialCharacters.checked
  ) {
    invalidInputs.push("Please seclect at least one charractor type.");
  }
  if (invalidInputs.length > 0) {
    window.alert(invalidInputs);
    return;
  }
  const password = document.getElementById("password");
  let pass = "";
  while (passwordLength > pass.length) {
    var keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let keyName = `${keyToAdd.name}`;
    let letsChecked = document.getElementById(keyName);
    if (letsChecked.checked) {
      pass += keyToAdd();
    }
  }
  password.innerHTML = pass;
}