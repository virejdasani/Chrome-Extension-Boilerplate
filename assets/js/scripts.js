// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  //Function to make the slider work  
  
  var slider = document.getElementById('mySlider');
  var output = document.getElementById('passCLenght');
  
  output.innerHTML = slider.value;
  slider.oninput = function (){
    output.innerHTML = this.value;
  }
  
  //Enable Generate password button if checkbox checked
  
   var generateBtn = document.getElementById('generate');
   var cb = document.querySelectorAll('.checkbox');
  
  
  for(i=0; i < cb.length; i++){
    cb[i].addEventListener("change", (e) => {
        var anyCb = false; 
          for (j=0; j < cb.length; j++){
            if (cb[j].checked){
              anyCb = true;
            }
          }
        if(anyCb){
          generateBtn.disabled = false;
        }else{
          generateBtn.disabled = true;
        }
    });
  }
  
  
  // Function to ask the user for password options
  function getPasswordOptions() {
    var passlength = output.innerHTML;
  
    var passSC = document.getElementById('passSC').checked;
    var passNum = document.getElementById('passNUM').checked;
    var passLC = document.getElementById('passLC').checked;
    var passUC = document.getElementById('passUC').checked;
  
    return{
      passlenght:passlength, 
      passSC:passSC, 
      passNum:passNum, 
      passLC:passLC, 
      passUC:passUC
    };
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randSC = arr[(Math.floor(Math.random() * arr.length))];
    return randSC;
  }
  
  
  // Function to generate password with user input
  function generatePassword() {
    var passOptions = getPasswordOptions();
    var pass='';
    // console.log(passOptions);
    var passValues = Object.keys(passOptions);
    
    for(i=0; i < passOptions.passlenght ; i++){    
        if(passOptions.passSC == true){
          if (pass.length == passOptions.passlenght) {
            break; 
          }
          pass += (getRandom(specialCharacters));
        } 
        if (passOptions.passNum == true){
          if (pass.length == passOptions.passlenght) {
            break; 
          }
          pass += (getRandom(numericCharacters));
        }  
        if (passOptions.passLC == true){
          if (pass.length == passOptions.passlenght) {
            break; 
          }
          pass += (getRandom(lowerCasedCharacters));
        }  if (passOptions.passUC == true){
          if (pass.length == passOptions.passlenght) {
            break; 
          }
          pass += (getRandom(upperCasedCharacters));
        }
    }
    
    return pass;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  //Get references to the #copy-pass element
  var copyPassword = document.querySelector('#copy-pass');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    copyPassword.style.display = 'block';
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
  
  //Copy password to clipboard
  function copyPass() {
    // Get the text field
    var copyText = document.getElementById('password');
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    // then alert('Your new password has been copied to the clipboard');
    copyPassword.style.backgroundColor = 'rgb(26 191 67)';
    copyPassword.innerHTML=('Password copied');
    setTimeout(function(){
      copyPassword.style.backgroundColor = '#ACACAC';
      copyPassword.innerHTML=('Copy password');
    }, 1500);
  }
  