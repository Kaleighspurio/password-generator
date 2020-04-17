var passwordButton = document.querySelector(".btn");

passwordButton.addEventListener("click", function() {
    var characters = prompt("How many characters do you want? (Must be between 8 and 128)");
    parseFloat(characters);
    console.log(characters);
    if (characters >= 8 && characters <= 128) {
        alert("Thanks!");
    } else {
        alert("That will not work. Please enter a number between 8 and 128");
    };

});


// var specialCharacters =  confirm("click OK to confirm including special characters (!@#$%^&*)");
// var numbers = confirm("Click OK to confirm including numbers");
// var lowerCase = confirm("Click OK to confirm including lower case letters");
// var upperCase = confirm("Click Ok to confirm including upper case letters");

var possibleCharacters = {
    specials: ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "~"],
    nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    lowers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppers: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}