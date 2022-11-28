let flag = 0;

const Gameboard = () => {
    let gameBoard = [];
    let gameControl = 0;
    let n;
    const assign = document.querySelector(".submitBtn")
    assign.addEventListener('click', () => {
        const player1 = document.getElementById("player1").value;
        const player2 = document.getElementById("player2").value;
    })  
    const zero = document.querySelector(".zero");
    zero.addEventListener('click', () => {
        n = 0;
        console.log(flag)
        assignment(n,gameBoard);
        zero.textContent = gameBoard[0]
    });
    const one = document.querySelector(".one");
    one.addEventListener('click', () => {
        n = 1;
        console.log(flag)
        assignment(n,gameBoard);
        one.textContent = gameBoard[1]
    });
    const two = document.querySelector(".two");
    two.addEventListener('click', () => {
        n = 2;
        console.log(flag)
        assignment(n,gameBoard);
        two.textContent = gameBoard[2]
    });
    
}   

Gameboard()

function assignment(n,gameBoard){
    switch(n)
    {
        case 0:
            if(flag == 0)
            {
                gameBoard[0] = 'X';
                console.log(gameBoard[0])
                flag = 1;
            }
            else
            {
                gameBoard[0] = 'O';
                flag = 0;
            } break;
        case 1:
            if(flag == 0)
            {
                gameBoard[1] = 'X';
                console.log(gameBoard[1])
                flag = 1;
            }
            else
            {
                gameBoard[1] = 'O';
                flag = 0;
            } break;
        case 2:
            if(flag == 0)
            {
                gameBoard[2] = 'X';
                console.log(gameBoard[2])
                flag = 1;
            }
            else
            {
                gameBoard[2] = 'O';
                flag = 0;
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
