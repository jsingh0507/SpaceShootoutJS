import Player from "./player.js";

class Projectile{
    constructor(canvas, player){
        // this.position = position;
        this.canvas = canvas;
        this.player = player;
        this.x = this.player.x+this.player.width/2 ;
        this.y = this.player.y;
        this.velocity = 10
        this.radius = 5;
        this.ctx = this.canvas.getContext('2d');
        this.keys = {};
        this.shooting = false;
        document.addEventListener("keydown", (event) => {
            if (event.key === ' ' && !this.shooting) {
                this.shooting = true;
            }
        });
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        this.ctx.fillStyle = 'white'
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.draw();
        if (this.shooting) {
            this.y -= this.velocity;
            if (this.y < -this.radius) {
                this.y = this.canvas.height + this.radius;
                this.shooting = false;
            }
        } else {
            this.x = this.player.x + this.player.width / 2;
            this.y = this.player.y;
        }
    }

}

export default Projectile;