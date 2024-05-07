class Explosion{
    constructor(canvas, x, y, color){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity_x = (Math.random()-0.5)*2;
        this.velocity_y = (Math.random()-0.5)*2;
        this.radius = (Math.random()) * 3;

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
        this.draw();
        this.x += this.velocity_x;
        this.y += this.velocity_y;
    }
}
export default Explosion;