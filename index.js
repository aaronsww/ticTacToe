const Gameboard = () => {
    let gameBoard = [];
    const assign = document.querySelector(".submitBtn")
    assign.addEventListener('click', () => {
        const player1 = document.getElementById("player1").value;
        const player2 = document.getElementById("player2").value;
    })  
    let currentPlayer = player1;
    const zero = document.querySelector(".zero");
    zero.addEventListener('click', () => {
        console.log(currentPlayer);
        if(currentPlayer == player1){
            gameBoard[0] = 'X';
            currentPlayer = player2;
        }
        else{
            gameBoard[0] = 'O';
            currentPlayer = player1;
        }
        zero.textContent = gameBoard[0]
    });
    const one = document.querySelector(".one");
    one.addEventListener('click', () => {
        console.log(currentPlayer);
        if(currentPlayer == player1){
            gameBoard[1] = 'X';
            currentPlayer = player2;
        }
        else{
            gameBoard[1] = 'O';
            currentPlayer = player1;
        }
        one.textContent = gameBoard[1]
    });
    const two = document.querySelector(".two");
    two.addEventListener('click', () => {
        console.log(currentPlayer);
        if(currentPlayer == player1){
            gameBoard[2] = 'X';
            currentPlayer = player2;
        }
        else{
            gameBoard[2] = 'O';
            currentPlayer = player1;
        }
        two.textContent = gameBoard[2]
    });
    
}   

Gameboard()