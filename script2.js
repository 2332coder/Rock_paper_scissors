                                                
                                                
                                                /* event for rock */    

const rock=document.querySelector('.choice-btn-rock');
rock.addEventListener("click",()=>{
    let humanSelection="rock"                               
    let computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
});

                                             // event for paper

const paper=document.querySelector('.choice-btn-paper');
paper.addEventListener("click",()=>{
    let humanSelection="paper"                               
    let computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
});

                                            //event for scissors
const scissors=document.querySelector('.choice-btn-scissors');
scissors.addEventListener("click",()=>{
    let humanSelection="scissors"                               
    let computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
});




