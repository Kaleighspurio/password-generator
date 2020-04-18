var passwordButton = document.querySelector(".btn");
var passwordOutput =  document.querySelector(".password");

var specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "~"];
var numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


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
        alert("That will not work. Please click Generate Password again and enter a number between 8 and 128.");
    };

    // These if/else concatinate the appropriate arrays together into one large array to draw characters from.
    if (specialCharacters == true) {
        var passwordArray = specialsArray;
    } else {
        var passwordArray = [];
    }

    console.log(passwordArray);

    if (numbers == true) {
        var passwordArray = passwordArray.concat(numsArray);
        console.log(passwordArray);
    } else {
        passwordArray = passwordArray;
    }

    if (lowerCase == true) {
        var passwordArray = passwordArray.concat(lowersArray);
        console.log(passwordArray);
    } else {
        passwordArray = passwordArray;
    }

    if (upperCase == true) {
        passwordArray = passwordArray.concat(uppersArray);
        console.log(passwordArray);
    } else {
        passwordArray = passwordArray;
    }

    if (specialCharacters == false && numbers == false && lowerCase == false && upperCase == false) {
        alert("You must confirm at least one type of character.  Please click 'Generate Password' to try again.")
    }

    console.log(passwordArray);
    // This will loop through the array to randomly select items and add them together to a length equal to what the user specified in the prompt.
    var randomPassword = " ";
    for (i = 0; i < characters; i++) { 
        newCharacter = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        randomPassword = randomPassword + newCharacter;
    }
    console.log(randomPassword);
    passwordOutput.textContent = randomPassword;
    
});

