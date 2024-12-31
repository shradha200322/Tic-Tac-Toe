console.log("Welcome to Tic Tac Toe");


let music = new Audio("game.mp3");
let clk = new Audio("turn.wav");
let gameover = new Audio("gameover.wav");


let turn = "X";
let gamestatus = false;


const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};


const checkWin = () => {
    let boxTexts = document.getElementsByClassName('box');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) &&
            (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) &&
            (boxTexts[e[0]].innerText !== '')) {
            document.querySelector('.display').innerText = "Player " + boxTexts[e[0]].innerText + " Won!";
            gamestatus = true;
            gameover.play();
        }
    });
};


let boxes = document.getElementsByClassName("tile");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box');
    element.addEventListener('click', () => {
        if (boxText.innerText === '' && !gamestatus) {
            boxText.innerText = turn;
            clk.play();
            checkWin();
            if (!gamestatus) {
                turn = changeTurn();
                document.querySelector('.display').innerText = "Player " + turn + "'s Turn";
            }
        }
    });
});


document.getElementById('reset').addEventListener('click', () => {
    Array.from(document.getElementsByClassName('box')).forEach(box => {
        box.innerText = ''; 
    });
    turn = "X"; 
    gamestatus = false; 
    document.querySelector('.display').innerText = "Player X's Turn"; 
    music.play(); 
});
