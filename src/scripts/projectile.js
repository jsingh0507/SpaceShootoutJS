class Projectile{
    constructor(canvas, x, y){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = 10
        this.radius = 3;
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

    update() {
        this.draw();
        this.y -= this.velocity;
        if (this.shooting){
            if (this.y < -this.radius) {
                this.y = this.canvas.height + this.radius;
            }
        }
    }

    stopShooting() {
        this.shooting = false;
    }

    collisionDetect(obj){
        const totalRadius = this.radius + obj.radius;
        const totalDistance = Math.sqrt((this.x-obj.x)**2 + (this.y-obj.y)**2)

        if (totalRadius>=totalDistance){
            return true;
        }else{
            return false;
        }
    }

}
export default Projectile;