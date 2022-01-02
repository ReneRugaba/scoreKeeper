const inputNumber = document.querySelector(".score_max");
const scoreLocation = document.querySelector(".score");
const scorePlayer1Location = document.querySelector(".scorePlayer1");
let scorePlayer1 = Number(scorePlayer1Location.textContent);
const scorePlayer2Location = document.querySelector(".scorePlayer2");
let scorePlayer2 = Number(scorePlayer2Location.textContent);
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const reset = document.querySelector(".reset");
let scoreMaxToWin = 0;
let winner = false;


function resetScore(e){
    e.preventDefault();
    e.stopPropagation();
    winner = false;
    scorePlayer1Location.style.color = "black";
    scorePlayer2Location.style.color = "black";
    scorePlayer2 = 0;
    scorePlayer1 = 0;
    scorePlayer1Location.innerHTML = 0;
    scorePlayer2Location.innerHTML = 0;
}



function getScoreMax(){
    scoreMaxToWin = inputNumber.value;
}

function setWinner(payer){
    payer.style.color = "green";
    winner = true;
}


function updateScorePlayer1(e){
    e.preventDefault();
    e.stopPropagation();
    getScoreMax();
    if (scoreMaxToWin > Number(scorePlayer1Location.textContent) && !winner) {
        scorePlayer1Location.textContent= ++scorePlayer1;
       if (inputNumber.value == scorePlayer1Location.textContent) {
           setWinner(scorePlayer1Location);
       }
    }
}

function updateScorePlayer2(e){
    e.preventDefault();
    e.stopPropagation();
    getScoreMax();
    
    if (scoreMaxToWin > Number(scorePlayer2Location.textContent) && !winner) {
        scorePlayer2Location.textContent= ++scorePlayer2;
        if (inputNumber.value == scorePlayer2Location.textContent) {
            setWinner(scorePlayer2Location);
        }
    }
}


player1.addEventListener("click",updateScorePlayer1);
player2.addEventListener("click",updateScorePlayer2);
reset.addEventListener("click",resetScore);
inputNumber.addEventListener("change",resetScore)