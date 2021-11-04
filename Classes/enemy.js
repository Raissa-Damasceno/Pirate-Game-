class Enemy{
    constructor(){
    this.enemyImage = new Image();
    this.enemyImage.src = "/Image/bau.png";
    this.width = 150;
    this.height = 150;
    this.x = canvas.width / 3;
    this.y = canvas.height / 3;
    this.enemySpeed = 20;
    this.counter = 0;
    }

    drawEnemy = () => {
        ctx.drawImage(this.enemyImage, this.x, this.y, this.width, this.height)        
    }

    covidMovement = () => {
        this.x = Math.floor(Math.random() * 600)
        this.y = Math.floor(Math.random() * 600) 
    }  
}

