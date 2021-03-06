

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

let startBtn = document.querySelector("#start-btn")

let restartBtn = document.querySelector("#restart-btn")

let splashScreen = document.querySelector("#splash-screen")

let gameoverScreen = document.querySelector("#gameover-screen")

let score = document.querySelector("span")


let game;

const startGame = () => {
    splashScreen.style.display = "none";
    //show canvas screen
    canvas.style.display = "flex"
    scorespan.style.display = "flex"


    //start the game

    //we willhave a class for the Game that when I click

    game = new Game();

    game.gameLoop();

    }

    const restartGame = () => {
        gameoverScreen.style.display = "none";
        canvas.style.display = "flex";
        scorespan.style.display = "flex"

        game = new Game();
        game.gameLoop();

}


//Events

restartBtn.addEventListener("click", restartGame);
startBtn.addEventListener("click", startGame);

document.addEventListener( "keydown", (event) => {
     game.player.playerMovement(event);
});
