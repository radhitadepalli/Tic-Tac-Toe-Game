console.log("Tic Tac Toe");
let music = new Audio("Assets/music.mp3");
let ting = new Audio("Assets/ting.mp3");
let gameover = new Audio("Assets/gameover.mp3");
let turn = "X";
let isGameOver = false;
let tie = new Audio("Assets/tie.mp3");

let flag = 0;

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

//function to check win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON";
            isGameOver = true;
            music.play();
            document.querySelector(".imgbox").children[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            let boxes = document.getElementsByClassName("box");
        }
    });
}

//Game logic
let cnt = 0;
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            cnt++;
            console.log(cnt);
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            if (isGameOver === false && cnt === 9) {
                tie.play();
                document.querySelector('.info').innerText = "Tie please reset";
                document.querySelector(".imgbox1").children[0].style.width = "400px";
                isGameOver = true;
            }
        }
    })
})



//Add on click listner to reset button
let reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    music.pause();
    music.currentTime = 0;
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").children[0].style.width = "0px";
    document.querySelector(".line").style.width = "0";
    cnt = 0;
    document.querySelector(".imgbox1").children[0].style.width = "0px";
})
