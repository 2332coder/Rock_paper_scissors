let humanScore=0,computerScore=0;                    //initialising the code

let roundWinner=document.querySelector('#round-winner');

                                                //selectors for showing the score card
let human_scorecard=document.querySelector('.human-scorecard');
let computer_scorecard=document.querySelector('.computer-scorecard');


let human_name=document.querySelector('.human-name');
let getName=()=>{
    const name=prompt('Enter your  name');
    human_name.innerText=name;
    if(name==""){
        human_name.innerText="human";
    }    
    
}
getName();


                        //find the choice of computer
let computerChoiceId=document.querySelector('#computer-choice-id');
function getComputerChoice(){                                               
    let x=Math.floor(3*Math.random());
    if(x==0){         
        computerChoiceId.src="images/stone.svg";                       
        return "rock";
    }
    else if(x==1){

        computerChoiceId.src="images/paper.svg";       
        return "paper";
    }
    else{
        computerChoiceId.src="images/scissors.svg";
        return "scissors";
    }
}


function playRound(humanSelection, computerSelection) {      //function for playing a round
    if(computerSelection=="rock"){
        if(humanSelection=="paper"){
            humanScore++;
            roundWinner.innerText=`you won`;
        }
        else if(humanSelection=="scissors"){
            computerScore++;
            roundWinner.innerText=`computer won this round`;
        }
    }
    
    if(computerSelection=="paper"){
        if(humanSelection=="scissors"){
            humanScore++;
            roundWinner.innerText=`you won this round`;
        }
        else if(humanSelection=="rock"){
            computerScore++;
            roundWinner.innerText=`computer won this round`;
        }
    }

    if(computerSelection=="scissors"){
        if(humanSelection=="rock"){
            humanScore++;
            roundWinner.innerText=`you won this round`;
        }
        else if(humanSelection=="paper"){
            computerScore++;
            roundWinner.innerText=`computer won this round`;
        }
    }
    console.log(`human:${humanSelection}   computer:${computerSelection} \n score: ${humanScore} : ${computerScore}`);
    human_scorecard.innerHTML=humanScore;
    computer_scorecard.innerHTML=computerScore;

    if(humanScore===5){
        setTimeout(() => {
            alert(`You won the game! Up for another?`);
            resetGame();
        }, 100);

    }
    else if(computerScore===5){
        setTimeout(() => {
            alert(`Computer won the game! Revenge?`);
            resetGame();
        }, 100);
    }
}

function resetGame() {
    humanChoiceId.src = "";
    computerChoiceId.src = "";
    humanScore = 0;
    computerScore = 0;
    human_scorecard.innerHTML = humanScore;
    computer_scorecard.innerHTML = computerScore;
    roundWinner.innerText="";
}    






