
let humanChoiceId=document.querySelector("#human-choice-id");                        //used to change the pic upon human selection                      
                                       

                                                /* event for rock */    

const rock=document.querySelector('.choice-btn-rock');
rock.addEventListener("click",()=>{
    let humanSelection="rock"                               
    let computerSelection=getComputerChoice();

    humanChoiceId.src="images/stone.svg";                          //replaces the previous image with the current choice
    playRound(humanSelection,computerSelection);
});

                                             // event for paper

const paper=document.querySelector('.choice-btn-paper');
paper.addEventListener("click",()=>{
    let humanSelection="paper"                               
    let computerSelection=getComputerChoice();
    humanChoiceId.src="images/paper.svg";
    playRound(humanSelection,computerSelection);
});

                                            //event for scissors
const scissors=document.querySelector('.choice-btn-scissors');
scissors.addEventListener("click",()=>{
    let humanSelection="scissors"                               
    let computerSelection=getComputerChoice();
    humanChoiceId.src="images/scissors.svg";
    playRound(humanSelection,computerSelection);
});




