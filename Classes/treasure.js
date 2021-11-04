class Treasure{
    constructor(){
    this.treasureImage = new Image();
    this.treasureImage.src = "/Image/bau.png";
    this.width = 100;
    this.height = 150;
    this.x = canvas.width / 3;
    this.y = canvas.height / 3;
    this.counter = 0;
    };

    drawTreasure = () => {
        ctx.drawImage(this.treasureImage, this.x, this.y, this.width, this.height)        
    };

    movementTreasure = () => {
        this.x = Math.floor(Math.random() * 600)
        this.y = Math.floor(Math.random() * 600) 
    }; 
};

