let computerSelection
let playerSelection
let computerScore=0
let playerScore=0


//getting choice of computer based on random number
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3)
   switch(x){
    case 0:
        computerSelection = "rock";
        break;
    case 1:
        computerSelection = "paper";
        break;
    case 2:
        computerSelection = "scissors"
   }
    return computerSelection
}

let winner
let result;
function playRound(playerSelection){
    document.getElementById("winner").textContent = winner
    if(playerScore <5 && computerScore <5){
        getComputerChoice()
        if(playerSelection === computerSelection){
            result = "It's a tie!"
        }
        else if(playerSelection === "rock"){
            switch(computerSelection){
                case "paper":
                    result= "You lose! Paper beats rock";
                    computerScore++;
                    break;
                case "scissors":
                    result= "You win! Rock beats scissors";
                    playerScore++;
                    break;
            }
        }
        else if(playerSelection === "paper"){
            switch(computerSelection){
                case "rock":
                    result = "You win! Paper beats rock";
                    playerScore++;
                    break;
                case "scissors":
                    result = "You lose! Scissors beats paper";
                    computerScore++;
                    break;
            }
        }
        else if(playerSelection === "scissors"){
            switch(computerSelection){
                case "paper":
                    result ="You win! Scissors beats paper";
                    playerScore++;
                    break;
                case "rock":
                    result = "You lose! Rock beats scissors";
                    computerScore++;
                    break;
            }
        }
        document.getElementById("result").textContent = result
        document.getElementById("playerScore").textContent = playerScore
        document.getElementById("computerScore").textContent = computerScore
        
    }
     else if(computerScore == 5){
        winner = "You Lose!";
    }
    else{
        winner = "You Win!";
    }
    
}


