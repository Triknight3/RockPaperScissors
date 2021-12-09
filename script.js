
// Coded by Broch, 29/Nov/2021.
//playRound to compare playerSelection from computerSelection and return a score to para1 or para2.
function playRound(playerSelection) {
  console.log("You say: " + playerSelection);

  const choice = ['rock', 'paper', 'scissors'];
  let computerSelection = choice[Math.floor(Math.random() * choice.length)];; 
  console.log("Computer say: " + computerSelection)  
  
   if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
   (playerSelection === 'scissors' && computerSelection === 'paper') ||
   (playerSelection === 'paper' && computerSelection === 'rock')) {
     console.log('You Win!');
     para1.textContent = ++playerScore;
     results.textContent = 'Nice round.  Let Omicron have it!';
  } else if (playerSelection === computerSelection) {
    console.log('tie');
    (para1.textContent = ++playerScore) &&  (para2.textContent = ++computerScore);
    results.textContent = 'Tie!?';
  } else {
    console.log('You lose');
     para2.textContent = ++computerScore;
     results.textContent = 'You are a discrace to the Human Race...';
  }

  // Check for a winner and reset if so
  let end_game = false;
  if(playerScore === 5){
    if(playerScore === computerScore){
      // both are 5
      alert('Tie Game');
      end_game = true;
    } else{
      // just playerScore === 5
      alert('You Beat Omicron!');
      end_game = true;
    }
  } else if(computerScore === 5){
    // just computerScore === 5
    alert('You LOST to Omicron...');
    end_game = true;
  }

  if(end_game){
    playerScore = 0;
    para1.textContent = 0;
    computerScore = 0;
    para2.textContent = 0;
    results.textContent = "";
  }
}


document.getElementById("playR").addEventListener('click', function(){playRound("rock")});
document.getElementById("playP").addEventListener('click', function(){playRound("paper")});
document.getElementById("playS").addEventListener('click', function(){playRound("scissors")});
let para1 = document.getElementById('p1');
let para2 = document.getElementById('p2');
let results = document.querySelector('#results');
let playerScore = 0;
let computerScore = 0;


