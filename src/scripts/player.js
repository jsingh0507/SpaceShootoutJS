export default class Player {
    constructor(canvas, shipSrc, x, y, width,height){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.icon = new Image();
        this.icon.src = shipSrc;
        this.ctx = this.canvas.getContext('2d');
        
    }

    draw(){
        // debugger
        this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);
        // this.ctx.fillRect(this.x, this.y,this.height,this.width)
    }

    move(dx, dy){
        this.x += dx;
        this.y +=dy;
    }

}