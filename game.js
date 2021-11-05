class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "/Image/log.png";
        this.treasure = new Treasure();
        this.player = new Player();
        this.bomb = new Bomb();
        this.isGameOver = false; 
        this.score = 0;     
    };

    gameover = () => {
        this.isGameOver = true;
        canvas.style.display = "none"
        gameoverScreen.style.display = "flex"
        scorespan.style.display = "flex"
    };
    
    gameLoop = () => {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
                
        
        //Movement functions
        this.bomb.movementBomb();
        this.bomb.bombWallCollision();
        this.player.playerTresureCollision()
        if(this.player.playerTresureCollision()){
            this.score++
            this.treasure.movementTreasure();
            this.bomb.bombSpeed++
            this.bomb.movementBomb()
            console.log(this.bomb.bombSpeed)
            score.innerText = this.score;
        }
        if(this.player.playerTresureCollision()){
            this.score++
            this.treasure.movementTreasure();
            this.bomb.bombSpeed = (this.bomb.bombSpeed * (1/5))
            this.bomb.movementBomb()
            console.log(this.bomb.bombSpeed)
            score.innerText = this.score;
        }

        // Draw functions
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.treasure.drawTreasure();
        this.player.drawPlayer();
        this.bomb.drawBomb();

       // Game Over
        if(this.player.playerBombCollision()){
            this.gameover()
        }

        // Animations 
        if(!this.isGameOver) {
        requestAnimationFrame(this.gameLoop)
        }
    };
};
