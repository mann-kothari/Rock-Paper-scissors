let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random() * 3);
    return options[compChoice];
};

const drawGame = () => {
    msg.innerText = "Game Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerHTML = `You Win! You beats comp ${compChoice} with ${userChoice} &#127942`;
        msg.style.backgroundColor = "green";
        user++;
        userScore.innerText = user;
    } else {
        msg.innerHTML = `You Lose! comp beats your ${userChoice} with ${compChoice} &#128532`;
        msg.style.backgroundColor = "red";
        comp++;
        compScore.innerText = comp;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    let userWin = true;
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});