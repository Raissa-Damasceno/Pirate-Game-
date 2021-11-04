class Bomb {
    constructor() {
    this.bombImage = new Image();
    this.bombImage.src = "/Image/bomb.png";
    this.width = 100;
    this.height = 100;
    this.x = canvas.width / 5;
    this.y = canvas.height / 5;
    this.bombSpeed = 20;
    this.counter = 0;
    }

    drawBomb = () => {
        ctx.drawImage(this.bombImage, this.x, this.y, this.width, this.height)    
    }

    bombMovement = () => {
        this.x = Math.floor(Math.random() * 680)
        this.y = Math.floor(Math.random() * 680) 
    }
}

