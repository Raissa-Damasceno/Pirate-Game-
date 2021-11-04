class Bomb {
    constructor() {
    this.bombImage = new Image();
    this.bombImage.src = "/Image/bomb.png";
    this.width = 100;
    this.height = 100;
    this.x = Math.floor(Math.random() * 1000);
    this.y = Math.floor(Math.random() * 1000);
    this.bombSpeed = 1;
    this.counter = 0;
    this.xDirection = 1
    this.yDirection = 1
    };

    drawBomb = () => {
        ctx.drawImage(this.bombImage, this.x, this.y, this.width, this.height)    
    };

    movementBomb = () => {
        this.x = this.x + (this.bombSpeed * this.xDirection)
        this.y = this.y + (this.bombSpeed * this.yDirection)
    };

    bombWallCollision = () => {
        
   if (this.x > canvas.width - 100) {
       this.xDirection = -1;
   }
   //colision with bottom 
   if (this.y > canvas.height - 100) {
       this.yDirection = -1;
       //this.xDirection = -1
   }
   //collision for left wall
   if (this.x < 0) {
        this.xDirection = 1;
   }
   //collision for right wall
   if (this.y < 0) {
       this.yDirection = 1;
}
    };
};
