var passwordButton = document.querySelector(".btn");
var passwordOutput =  document.querySelector(".password");
// var possibleCharacters = 
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "~"];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// this bring up a prompt when the button is clicked, and asks the user what characters they want in the password
passwordButton.addEventListener("click", function(event) {
    var characters = prompt("How many characters do you want? (Must be between 8 and 128)");
    characters = parseInt(characters);
    console.log(characters);
    if (characters >= 8 && characters <= 128) {
        var specialCharacters =  confirm("click OK to confirm including special characters (!@#$%^&*)");
        var numbers = confirm("Click OK to confirm including numbers");
        var lowerCase = confirm("Click OK to confirm including lower case letters");
        var upperCase = confirm("Click Ok to confirm including upper case letters");
        console.log(specialCharacters);
        console.log(numbers);
        console.log(lowerCase);
        console.log(upperCase);
    } else {
        alert("That will not work. Please enter a number between 8 and 128. Click Generate Passwork again.");
    };

    

    if (specialCharacters == true && numbers == true && lowerCase == true && upperCase == true) {
        var passwordArray = specials.concat(nums, lowers, uppers);
        console.log(passwordArray);
    }
    
    var randomPassword = " ";
    for (i = 0; i < characters; i++) { 
        newCharacter = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        randomPassword = randomPassword + newCharacter;
    }
    console.log(randomPassword);
    passwordOutput.textContent = randomPassword;
    
});


// function generatePassword(specialCharacters, numbers, lowerCase, upperCase) {
//     if (specialCharacters = true && numbers = true && lowerCase = true && upperCase = true) {
//         alert("wow!");
//     }
// } 
// generatePassword(specialCharacters, numbers, lowerCase, upperCase);

// if (specialCharacters == true && numbers == true && lowerCase == true && upperCase == true) {
//     var passwordArray = specials.concat(numbers, lowerCase, upperCase);
//     console.log(passwordArray);
// }