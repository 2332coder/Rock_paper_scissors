let humanScore=0,computerScore=0;                    //initialising the code

function getComputerChoice(){                       //find the choice of computer
    let x=Math.floor(3*Math.random());
    if(x==0){                                   
        return "rock";
    }
    else if(x==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}




function getHumanChoice(){                          //get the choice from human player
    let y=prompt('enter your choice');
    return y.toLocaleLowerCase();
}


function playRound(humanSelection, computerSelection) {      //function for playing a round
    if(computerSelection=="rock"){
        if(humanSelection=="paper"){
            humanScore++;
        }
        else if(humanSelection=="scissors"){
            computerScore++;
        }
    }
    
    if(computerSelection=="paper"){
        if(humanSelection=="scissors"){
            humanScore++;
        }
        else if(humanSelection=="rock"){
            computerScore++;
        }
    }

    if(computerSelection=="scissors"){
        if(humanSelection=="rock"){
            humanScore++;
        }
        else if(humanSelection=="paper"){
            computerScore++;
        }
    }
    console.log(`computer:${computerSelection} human:${humanSelection} \n score: ${computerScore} : ${humanScore}`);
}


function playGame(){                            //plays the game 5 times

    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();  
        playRound(humanSelection, computerSelection);
    }
    
}
playGame();


