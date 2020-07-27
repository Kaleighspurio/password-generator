const passwordButton = document.querySelector(".password-btn");
const passwordOutput =  document.querySelector(".password");

const charactersInput = document.querySelector("#character-input");
const specialsInput = document.querySelector("#special-characters");
const numbersInput = document.querySelector("#numbers");
const lowercaseInput = document.querySelector("#lowercase");
const uppercaseInput = document.querySelector("#uppercase");

const specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "~"];
const numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// this bring up a prompt when the button is clicked, and asks the user what characters they want in the password
passwordButton.addEventListener("click", (event) => {
    // let characters = prompt("How many characters do you want? (Must be between 8 and 128)");

    // get the value from the character length input
    let characters = parseInt(charactersInput.value);
    console.log(charactersInput.value);
    if (characters < 8 || characters > 128) {
        alert("That will not work. Please enter a number between 8 and 128 for the password length.");
        return;
    }

    // These if/else concatinate the appropriate arrays together into one large array to draw characters from.
    let passwordArray;
    if (specialsInput.checked) {
        passwordArray = specialsArray;
    } else {
        passwordArray = [];
    }

    console.log(passwordArray);

    if (numbersInput.checked) {
        passwordArray = passwordArray.concat(numsArray);
        console.log(passwordArray);
    } 

    if (lowercaseInput.checked) {
        passwordArray = passwordArray.concat(lowersArray);
        console.log(passwordArray);
    } 

    if (uppercaseInput.checked) {
        passwordArray = passwordArray.concat(uppersArray);
        console.log(passwordArray);
    } 

    if (specialsInput.unchecked && numbersInput.unchecked && lowercaseInput.unchecked && uppercaseInput.unchecked) {
        alert("You must confirm at least one type of character.  Please click 'Generate Password' to try again.");
        return;
    }

    console.log(passwordArray);
    // This will loop through the array to randomly select items and add them together to a length equal to what the user specified in the prompt.
    let randomPassword = " ";
    for (i = 0; i < characters; i++) { 
        newCharacter = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        randomPassword = randomPassword + newCharacter;
    }
    console.log(randomPassword);
    passwordOutput.textContent = randomPassword;
});

