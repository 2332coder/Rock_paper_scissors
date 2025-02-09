let humanScore=0,computerScore=0;                    //initialising the code

                                                    //selectors for showing the score card
let human_scorecard=document.querySelector('.human-scorecard');
let computer_scorecard=document.querySelector('.computer-scorecard');


let human_name=document.querySelector('.human-name');
let getName=()=>{
    const name=prompt('Enter your god name');
    human_name.innerText=name;
}
//getName();


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
    console.log(`human:${humanSelection}   computer:${computerSelection} \n score: ${humanScore} : ${computerScore}`);
    human_scorecard.innerHTML=humanScore;
    computer_scorecard.innerHTML=computerScore;
}






