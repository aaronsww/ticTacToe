const Gameboard = () => {
    let gameBoard = [];
    let gameControl = 0;
    let n;
    let flag = 0;
    const assign = document.querySelector(".submitBtn")
    assign.addEventListener('click', () => {
        const player1 = document.getElementById("player1").value;
        const player2 = document.getElementById("player2").value;
    })  
    const zero = document.querySelector(".zero");
    zero.addEventListener('click', () => {
        n = 0;
        console.log(n)
        assignment(n,flag,gameBoard);
    });
    const one = document.querySelector(".one");
    one.addEventListener('click', () => {
        n = 1;
        console.log(n)
    });
    const two = document.querySelector(".two");
    two.addEventListener('click', () => {
        n = 2;
        console.log(n)
    });
    
}   
-
Gameboard()

function assignment(n,flag,gameBoard){
    switch(n)
    {
        case 0:
            if(flag == 0)
            {
                gameBoard[0] = 'X';
                console.log(gameBoard[0])
            }
            else
            {
                gameBoard[0] = 'O';
            } break;
        
    }
}


// const three = document.querySelector(".three");
// three.addEventListener('click', () => {
//     n = 3;
//     console.log(n)
// });
// const four = document.querySelector(".four");
// four.addEventListener('click', () => {
//     n = 4;
//     console.log(n)
// });