/* Jag har kämpat som fasen för att få ordning på detta. 
Tror inte jag har några buggar. Har letat och sökt i både consolen och developer tools. 
Finns så klart utrymme för förbättring, men jag tycker ändå att det tillslut blev helt okej!
Mvh Younes */

let userNumber = "";
let dices = document.querySelector("p.dices")
let rolled = false;
let hasLost = false;
let userScore = 0;
let checkWin = true;
let highScore = 0;
let canChooseSix = true;
let canChooseSeven = true;
let canChooseEight = true;
let canChooseNine = true;

// Nedan följer fyra kodblock som låter spelaren välja ett nummer. (Six, Seven, Eight, Nine)
/* Kodblocken blev lite stora, för att jag inte hittade ett smidigare sätt att göra så att
användaren endast kunde välja ett nummer åt gången. Men det funkar ju iallafall som förväntat. */

let six = document.querySelector("p.six")
six.addEventListener("click", () => {
    if(canChooseSix === true) {
    let sixred = six.classList.toggle("sixred")
    let currentNumber = document.querySelector("p.currentNumber");
    let currentScore = document.querySelector("p.score")
    if(sixred === true) {
        userNumber = 6;
        rolled = true;
        checkWin = false;
        currentScore.textContent = "";
        userScore = 0;
        canChooseSeven = false;
        canChooseEight = false;
        canChooseNine = false;

    } else {
        userNumber = "";
        rolled = false;
        checkWin = true;
        currentNumber.textContent = "";
        canChooseSix = true;
        canChooseSeven = true;
        canChooseEight = true;
        canChooseNine = true;
    }}
})




let seven = document.querySelector("p.seven")
seven.addEventListener("click", () => {
    if(canChooseSeven === true) {
    let sevenred = seven.classList.toggle("sevenRed")
    let currentNumber = document.querySelector("p.currentNumber");
    let currentScore = document.querySelector("p.score")
    if(sevenred === true) {
        userNumber = 7;
        rolled = true;
        checkWin = false;
        currentScore.textContent = "";
        userScore = 0;
        canChooseSix = false;
        canChooseEight = false;
        canChooseNine = false;

    } else {
        userNumber = "";
        rolled = false;
        checkWin = true;
        currentNumber.textContent = "";
        canChooseSix = true;
        canChooseSeven = true;
        canChooseEight = true;
        canChooseNine = true;
    }}
})




let eight = document.querySelector("p.eight")
eight.addEventListener("click", () => {
    if(canChooseEight == true) {
    let eightred = eight.classList.toggle("eightRed")
    let currentNumber = document.querySelector("p.currentNumber");
    let currentScore = document.querySelector("p.score")
    if(eightred === true) {
        userNumber = 8;
        rolled = true;
        checkWin = false;
        currentScore.textContent = "";
        userScore = 0;
        canChooseSix = false;
        canChooseSeven = false;
        canChooseNine = false;

    } else {
        userNumber = "";
        rolled = false;
        checkWin = true;
        currentNumber.textContent = "";
        canChooseSix = true;
        canChooseSeven = true;
        canChooseEight = true;
        canChooseNine = true;
    }}
})




let nine = document.querySelector("p.nine")
nine.addEventListener("click", () => {
    if(canChooseNine === true) {
    let ninered = nine.classList.toggle("nineRed")
    let currentNumber = document.querySelector("p.currentNumber");
    let currentScore = document.querySelector("p.score")
    if(ninered === true) {
        userNumber = 9;
        rolled = true;
        checkWin = false;
        currentScore.textContent = "";
        userScore = 0;
        canChooseEight = false;
        canChooseSeven = false;
        canChooseSix = false;

    } else {
        userNumber = "";
        rolled = false;
        checkWin = true;
        currentNumber.textContent = "";
        canChooseSix = true;
        canChooseSeven = true;
        canChooseEight = true;
        canChooseNine = true;
    }}
})



// Här är eventlyssnaren som lyssnar på ett klick för att "rulla" tärningarna.

dices.addEventListener("click", () => {
    if(rolled) {
    removeDices();
    rollDices();

    let currentScore = document.querySelector("p.score");
    if(currentScore) {
    removeScore(); 
        }
        updateHighScore();
    } else {
        if(checkWin === false) {
            rollDices();
    }}
    });

// Nedan är funktionen för att rulla tärningarna.    

function rollDices() {
    let currentNumber = document.querySelector("p.currentNumber");
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    userScore += randomNumber;
    let paragraph = document.createElement("p");
    paragraph.className = "random";
    paragraph.textContent = randomNumber;
    currentNumber.appendChild(paragraph);
    if(userNumber === randomNumber) {
        hasLost = true;
        let newParagraph = document.createElement("p")
        newParagraph.className = "end";
        currentNumber.appendChild(newParagraph)
        newParagraph.textContent = "Tyvärr, du förlorar! Välj siffra för att köra igen.";
        rolled = false;
        checkWin = true;

        
    } else {
        let trueScore = document.createElement("p")
        let currentScore = document.querySelector("p.score")
        trueScore.textContent = userScore;
        currentScore.appendChild(trueScore)
        
    }
}

/* När användaren har rullat tärningen och score har visats, så tas tärningarna bort
med funktionen nedan, för att endast visa senaste "kastet." */

function removeDices() {
    let paragraph = document.querySelectorAll("p.random");
    paragraph.forEach(paragraph => {
        paragraph.remove();
    })
}

/* Funktionen nedan tar bort score efter varje kast så att det inte
bildas en klump med flera score. Utan alltid är det nuvarande ihopräknade scoret. */

function removeScore() {
    let scoreContainer = document.querySelector("p.score");
    if (scoreContainer && scoreContainer.childElementCount > 1) {
        scoreContainer.removeChild(scoreContainer.firstChild);
    }
}

// Funtktionen för highscore som har koll på tidigare highscore och sedan uppdaterar om nödvändigt.

function updateHighScore() {
    if (hasLost && userScore >= highScore) {
        let highScoreElement = document.querySelector("p.highScore");
        while (highScoreElement.firstChild) {
            highScoreElement.removeChild(highScoreElement.firstChild);
        }
        let userHighScore = document.createElement("p");
        highScoreElement.appendChild(userHighScore);
        userHighScore.textContent = userScore;
        highScore = userScore;
    }
}