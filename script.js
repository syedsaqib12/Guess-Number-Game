
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

let randomeNumberMedium = parseInt(Math.random() * 200);
let wrongNumberguessMedium = 0;




function mediumTheNumber() {
    let userInput = parseInt(document.querySelector("input").value);
    wrongNumberguessMedium++;
    if (userInput < randomeNumberMedium) {
        alert("Too Small");

    }
    else if (userInput > randomeNumberMedium) {
        alert("Too Big");

    } else if (userInput == randomeNumberMedium) {
        alert("CONGRATULATIONS" + wrongNumberguessMedium + "Times Wrong");
    }
}

let randomeNumberHard = parseInt(Math.random() * 200);
let wrongNumberguessHard = 0;




function HardTheNumber() {
    let userInput = parseInt(document.querySelector("input").value);
    wrongNumberguessHard++;
    if (userInput < randomeNumberHard) {
        alert("Too Small");

    }
    else if (userInput > randomeNumberHard) {
        alert("Too Big");

    } else if (userInput == randomeNumberHard) {
        alert("CONGRATULATIONS" + wrongNumberguessHard + "Times Wrong");
    }
}

function goToEasyMode() {
    window.location = "index.html"
}
function goToMediumMode() {
    window.location = "indexMedium.html"
}
function goToHardMode() {
    window.location = "indexHard.html"
}
