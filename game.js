class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "/Image/log.png";
        this.enemy = new Enemy();
        this.player = new Player();
        this.bomb = new Bomb();
        this.isGameOver = false; 
        this.score = 0;     
    }

    gameover = () => {
        this.isGameOver = true;
        canvas.style.display = "none"
        gameoverScreen.style.display = "flex"
    }
    
    gameLoop = () => {
       this.enemy.counter ++;
       this.bomb.counter ++;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        


        //if(this.enemy.counter % 120 === 0) {
        //    this.enemy.covidMovement();
        //};
        
        if(this.bomb.counter % 80 === 0){
            this.bomb.bombMovement()
        };

        if(this.player.playerTresureCollision()){
            this.score++
            this.enemy.covidMovement();
            console.log(score)
            score.innerText = this.score;
        }


        //*3.DRAWING ELEMENTS
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.enemy.drawEnemy();
        this.player.drawPlayer();
        this.bomb.drawBomb();

       
        if(this.player.playerBombCollision()){
            this.gameover()
        }
        //*4.ANIMATION FRAME AND GAME LOGIC CHANGES
        if(!this.isGameOver) {
        requestAnimationFrame(this.gameLoop)
        }
    }
}
