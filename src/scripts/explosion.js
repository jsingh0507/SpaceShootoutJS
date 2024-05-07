class Explosion{
    constructor(canvas, x, y, endRadius, color){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = 10
        this.endRadius = endRadius;
        this.radius = 5
        this.ctx = this.canvas.getContext('2d');
        this.color = color
        this.explosion = true; 
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        if (this.radius < this.endRadius) {
            this.radius += 2; 
        } else {
            this.explosion = false; 
        }
        this.draw();
        return this.explosion;
    }
}
export default Explosion;