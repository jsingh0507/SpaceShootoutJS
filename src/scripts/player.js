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
        
        // variables to keep track of the keyboard entry of the user:
        this.keys = {};
        // speed for the movements:
        this.speed = 5;

        //this event listener will work when pressed the key
        document.addEventListener("keydown", (event) => {
            this.keys[event.key] = true;
        });

        //this event listener is when we release the key
        document.addEventListener("keyup", (event) => {
            this.keys[event.key] = false;
        });
    }

    updatePos(){
        if(this.keys['a']){
            this.x -= this.speed;
        }
        if(this.keys['d']){
            this.x += this.speed;
        }
        if(this.keys['w']){
            this.y -= this.speed;
        }
        if(this.keys['s']){
            this.y += this.speed;
        }
    }

    draw(){
        // debugger
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.updatePos();
        this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);
        // this.ctx.fillRect(this.x, this.y,this.height,this.width)
    }

    

}