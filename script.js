let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgText = document.querySelector("#msg");


//access user & computer score
const userScoreInp = document.querySelector("#user-score");
const compScoreInp = document.querySelector("#comp-score");

// generate computer score
const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);

    return options[randomNumber];
};


const drawGame = () => {
    // console.log("Game is draw!");
    msgText.innerText = "Game is draw! Play again!";
    msgText.style.backgroundColor = "grey"; 
};

const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin){
        userScore++;
        userScoreInp.innerText = userScore;

        // console.log("YOU WIN!");
        msgText.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msgText.style.backgroundColor = "green"; 
    } else{
        compScore++;
        compScoreInp.innerText = compScore;

        // console.log("YOU LOSE!");
        msgText.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msgText.style.backgroundColor = "red"; 
    }
};

const playGame = (userChoice) => {

    // access computer score
    const compChoice = genCompChoice();

    if(userChoice == compChoice){

        //draw game
        drawGame();
    } else {
        let userWin = true;

        if(userChoice == "rock"){

            //compChoice -> paper / scissors
           userWin = compChoice == "paper" ? false : true;
        } else if(userChoice == "paper"){

            //compChoice -> rock / scissors
            userWin = compChoice == "scissors" ? false : true;
        } else {

            //compChoice -> rock / paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {

    choice.addEventListener("click", () =>{

        const userChoice = choice.getAttribute("id");

       playGame(userChoice);
    });
});
