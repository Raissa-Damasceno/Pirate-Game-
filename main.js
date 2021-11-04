let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

let startBtn = document.querySelector("#start-btn")
let restartBtn = document.querySelector("#restart-btn")
let splashScreen = document.querySelector("#splash-screen")
let gameoverScreen = document.querySelector("#gameover-screen")
let score = document.querySelector("span")
let scoreboard = 0;

let game;

const startGame = () => {
    
    splashScreen.style.display = "none";
  
    canvas.style.display = "flex"

    game = new Game();

    game.gameLoop();

}

    const restartGame = () => {
        gameoverScreen.style.display = "none";
        canvas.style.display = "flex";

        game = new Game();
        game.gameLoop();

}

restartBtn.addEventListener("click", restartGame)
startBtn.addEventListener("click", startGame);
document.addEventListener( "keydown", (event) => {
     game.player.playerMovement(event);
})
