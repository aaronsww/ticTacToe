let gameBoard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

const assign = document.querySelector(".submitBtn")

assign.addEventListener('click', () =>{
    const player1 =  document.getElementById("player1").value;
    const player2 =  document.getElementById("player2").value;
   
})
let currentPlayer = player1;

const zero = document.querySelector(".zero");
zero.addEventListener('click', () => {
    let n = 0;
    playedMove(n);
    zero.textContent = gameBoard[0];
    combination();
});
const one = document.querySelector(".one");
one.addEventListener('click', () => {
    let n = 1;
    playedMove(n);
    one.textContent = gameBoard[1];
    combination();
});
const two = document.querySelector(".two");
two.addEventListener('click', () => {
    let n = 2;
    playedMove(n);
    two.textContent = gameBoard[2];
    combination();
});
const three = document.querySelector(".three");
three.addEventListener('click', () => {
    let n = 3;
    playedMove(n);
    three.textContent = gameBoard[3];
    combination();
});
const four = document.querySelector(".four");
four.addEventListener('click', () => {
    let n = 4;
    playedMove(n);
    four.textContent = gameBoard[4];
    combination();
});
const five = document.querySelector(".five");
five.addEventListener('click', () => {
    let n = 5;
    playedMove(n);
    five.textContent = gameBoard[5];
    combination();
});
const six = document.querySelector(".six");
six.addEventListener('click', () => {
    let n = 6;
    playedMove(n);
    six.textContent = gameBoard[6];
    combination();
});
const seven = document.querySelector(".seven");
seven.addEventListener('click', () => {
    let n = 7;
    playedMove(n);
    seven.textContent = gameBoard[7];
    combination();
});
const eight = document.querySelector(".eight");
eight.addEventListener('click', () => {
    let n = 8;
    playedMove(n);
    eight.textContent = gameBoard[8];
    combination();
});

function playedMove(n)
{
    if(currentPlayer == player1){
        gameBoard[n] = 'X';
        currentPlayer =  player2;
    }
    else{
        gameBoard[n] = 'O';
        currentPlayer = player1;
    }
}

function combination(){
    if(gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2])
        console.log("done");  
    else if(gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5])
        console.log("done");   
    else if(gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8])
        console.log("done");   
    else if(gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6])
        console.log("done");   
    else if(gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7])
        console.log("done");   
    else if(gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8])
        console.log("done");   
    else
        console.log("not yet");
}
