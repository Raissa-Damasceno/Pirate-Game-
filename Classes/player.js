class Player{
    constructor(){
    this.playerImage = new Image();
    this.playerImage.src = "/Image/pirate.png";
    this.width = 150;
    this.height = 150;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.speed = 20;
    this.counter = 0;
    this.yDirection = 1;
    this.xDirection = 1; 
    this.colectTresure = 0;
    }

    drawPlayer = () => {
        ctx.drawImage(this.playerImage, this.x, this.y, this.width, this.height)
    }

    playerMovement = (event) => {
        let arrowRight = "ArrowRight";
        let arrowLeft = "ArrowLeft";
        let arrowUp = "ArrowUp";
        let arrowDown = "ArrowDown";
    
        
        if (event.code === arrowRight) { 
            if(this.x < canvas.height + 50) {
            this.x = this.x + 30;
            //console.log("Right")
        };

        } else if (event.code === arrowLeft) {
            if(this.x > 0) {
            this.x = this.x - 30
            //console.log("Left")
        };

        } else if (event.code === arrowUp) {
            if(this.y > 0) {
            this.y = this.y - 30
            //console.log("Up")
        };

        } else if (event.code === arrowDown) {
            if(this.y < canvas.width - 375) {
            this.y = this.y + 30
            //console.log("Down")
          };
         };
        };

    playerBombCollision = () => {
        
        if ((this.x + 50) < game.bomb.x + game.bomb.width &&
            (this.x + 50) + (this.width - 125) > game.bomb.x &&
            (this.y + 50) < game.bomb.y + game.bomb.height &&
            (this.height - 100) + (this.y + 50) > game.bomb.y){
                return true
            }
            else {
               return false
            }

        
    };

    playerTresureCollision = () => {
        
        if ((this.x + 50) < game.enemy.x + game.enemy.width &&
        (this.x + 50) + (this.width - 150) > game.enemy.x &&
            (this.y + 50) < game.enemy.y + game.enemy.height &&
            (this.height - 75) + (this.y + 50) > game.enemy.y){
                return true
            } else {
                return false
            }        
    };
}
    //this.player.playerMovement();

    