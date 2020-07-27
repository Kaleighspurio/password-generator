const passwordButton = document.querySelector(".password-btn");
const passwordOutput =  document.querySelector(".password");

const charactersInput = document.querySelector("#character-input");
const specialsInput = document.querySelector("#special-characters");
const numbersInput = document.querySelector("#numbers");
const lowercaseInput = document.querySelector("#lowercase");
const uppercaseInput = document.querySelector("#uppercase");

const specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "~", "(", ")", "{", "}", "<", ">", "_", "-", "[", "]", "+", "="];
const numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const generatePassword = () => {
    // get the value from the character length input
    let characters = parseInt(charactersInput.value);
    console.log(characters);
    // will not move forward if appropriate character length not provided.
    if (characters < 8 || characters > 128 || !characters) {
        alert("That will not work. Please enter a number between 8 and 128 for the password length.");
        return;
    }

    // These if/else concatinate the appropriate arrays together into one large array to draw characters from depending on what was checked on the form.
    let passwordArray;
    if (specialsInput.checked) {
        passwordArray = specialsArray;
    } else {
        passwordArray = [];
    }

    if (numbersInput.checked) {
        passwordArray = passwordArray.concat(numsArray);
    } 

    if (lowercaseInput.checked) {
        passwordArray = passwordArray.concat(lowersArray);
    } 

    if (uppercaseInput.checked) {
        passwordArray = passwordArray.concat(uppersArray);
    } 

    // will not move forward if at least one option is not checked
    if (!specialsInput.checked && !numbersInput.checked && !lowercaseInput.checked && !uppercaseInput.checked) {
        alert("You must confirm at least one type of character.  Please check off at least one option and try again.");
        return;
    }

    // This will loop through the array to randomly select items and add them together to a length equal to what the user specified in the prompt.
    let randomPassword = " ";
    for (i = 0; i < characters; i++) { 
        newCharacter = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        randomPassword = randomPassword + newCharacter;
    }
    console.log(randomPassword);
    passwordOutput.textContent = randomPassword;
}

// this bring up a prompt when the button is clicked, and asks the user what characters they want in the password
passwordButton.addEventListener("click", generatePassword);
