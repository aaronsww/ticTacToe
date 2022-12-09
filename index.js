let gameBoard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

const assign = document.querySelector(".submitBtn")
const result = document.querySelector(".result")

assign.addEventListener('click', () =>{
    const start = document.querySelector(".start")
    result.textContent =`${player1.value} vs ${player2.value}`;
    start.classList.add("shrinkIt")
    
})
let currentPlayer = player1;

const zero = document.querySelector(".zero");
zero.addEventListener('click', () => {
    let n = 0;
    playedMove(n);
    zero.textContent = gameBoard[0];
    combination();
}, {once : true});
const one = document.querySelector(".one");
one.addEventListener('click', () => {
    let n = 1;
    playedMove(n);
    one.textContent = gameBoard[1];
    combination();
} , {once : true});
const two = document.querySelector(".two");
two.addEventListener('click', () => {
    let n = 2;
    playedMove(n);
    two.textContent = gameBoard[2];
    combination();
} ,{once : true});
const three = document.querySelector(".three");
three.addEventListener('click', () => {
    let n = 3;
    playedMove(n);
    three.textContent = gameBoard[3];
    combination();
} , {once : true});
const four = document.querySelector(".four");
four.addEventListener('click', () => {
    let n = 4;
    playedMove(n);
    four.textContent = gameBoard[4];
    combination();
}, {once : true});
const five = document.querySelector(".five");
five.addEventListener('click', () => {
    let n = 5;
    playedMove(n);
    five.textContent = gameBoard[5];
    combination();
}, {once : true});
const six = document.querySelector(".six");
six.addEventListener('click', () => {
    let n = 6;
    playedMove(n);
    six.textContent = gameBoard[6];
    combination();
}, {once : true});
const seven = document.querySelector(".seven");
seven.addEventListener('click', () => {
    let n = 7;
    playedMove(n);
    seven.textContent = gameBoard[7];
    combination();
}, {once : true});
const eight = document.querySelector(".eight");
eight.addEventListener('click', () => {
    let n = 8;
    playedMove(n);
    eight.textContent = gameBoard[8];
    combination();
}, {once : true});

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
        winner();
    else if(gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5])
        winner();    
    else if(gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8])
        winner();     
    else if(gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6])
        winner();     
    else if(gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7])
        winner();      
    else if(gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8])
         winner();    
    else if(gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8])
         winner();   
    else if(gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6])
        winner();      
}

function winner(){
    zero.disabled = true;
    one.disabled = true;
    two.disabled = true;
    three.disabled = true;
    four.disabled = true;
    five.disabled = true;
    six.disabled = true;
    seven.disabled = true;
    eight.disabled = true;
    const announceWinner = document.createElement('div');
    if(currentPlayer == player1)
        announceWinner.textContent = `${player2.value} wins!`;
    else
        announceWinner.textContent = `${player1.value} wins!`;
    result.appendChild(announceWinner);
}

 