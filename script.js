
let randomeNumber = parseInt(Math.random() * 100);
let wrongNumberguess = 0;




function guessTheNumber() {
    let userInput = parseInt(document.querySelector("input").value);
    wrongNumberguess++;
    if (userInput < randomeNumber) {
        alert("Too Small");

    }
    else if (userInput > randomeNumber) {
        alert("Too Big");

    } else if (userInput == randomeNumber) {
        alert("CONGRATULATIONS" + wrongNumberguess + "Times Wrong");
    }
}