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
        this.radius = 5;
        this.canCollide = true;
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
        //this function will basically check if the keys is true(from the eventListener) then increase the speed 
        if(this.keys['a'] && this.x>=0){
            this.x -= this.speed;
        }
        if(this.keys['d'] && (this.x+this.width<=this.canvas.width) ){
            this.x += this.speed;
        }
        if(this.keys['w'] && this.y>=0){
            this.y -= this.speed;
        }
        if(this.keys['s'] && (this.y+this.height<=this.canvas.height)){
            this.y += this.speed;
        }
    }

    draw(){
        // debugger
        this.updatePos();
        this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);
    }

    collisionDetect(obj){
        const totalRadius = this.radius + obj.radius;
        const totalDistance = Math.sqrt( ((this.x-(obj.x-obj.width/2))**2) + ((this.y-(obj.y-obj.height/2)))**2)

        if (totalRadius>=totalDistance && this.canCollide){
            this.canCollide = false;
            setTimeout(() => {
                this.canCollide = true;
            }, 3000);
            return true;
        }else{
            return false;
        }
    }
}