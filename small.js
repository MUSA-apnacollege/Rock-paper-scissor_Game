let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Initial message when the game starts
msg.innerText = "Continue game. Try again!";
msg.style.backgroundColor = "#081b31";  // Default background color

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("User choice:", userChoice);
    console.log("Computer choice:", compChoice);

    // Logic for determining the winner
    if (userChoice === compChoice) {
        console.log("It's a tie!");
        msg.innerText = "It's a tie! Continue game. Try again!";
        msg.style.backgroundColor = "#081b31"; // Reset color for tie
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        userScore++;
        userScorePara.innerText = userScore; // Update user score display
        console.log("You win! Score:", userScore);
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; // Green for win
    } else {
        compScore++;
        compScorePara.innerText = compScore; // Update computer score display
        console.log("Computer wins! Score:", compScore);
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; // Red for loss
    }
};

// Event listeners for each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


