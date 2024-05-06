class Projectile{
    constructor(canvas, x, y){
        // this.position = position;
        this.canvas = canvas;
        // this.player = player;
        this.x = x;
        this.y = y;
        this.velocity = 10
        this.radius = 5;
        this.ctx = this.canvas.getContext('2d');
        this.shooting = true;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        this.ctx.fillStyle = 'white'
        this.ctx.fill();
        this.ctx.closePath();
    }

    // update() {
    //     this.draw();
    //     if (this.shooting) {
    //         this.y -= this.velocity;
    //         if (this.y < -this.radius) {
    //             this.y = this.canvas.height + this.radius;
    //             this.shooting = false;
    //         }
    //     } else {
    //         this.x = this.player.x + this.player.width / 2;
    //         this.y = this.player.y;
    //     }
    // }

    update() {
        this.draw();
        this.y -= this.velocity;
        if (this.shooting){
            if (this.y < -this.radius) {
                this.y = this.canvas.height + this.radius;
                // const index = projectiles.indexOf(this);
                // if (index > -1) {
                //     projectiles.splice(index, 1);
                // }
            }
        }
    }

    stopShooting() {
        this.shooting = false;
    }

}

export default Projectile;