class MovableObjects {
    constructor(canvas, imageSrc, x, y, width, height) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 4;
        this.icon = new Image();
        this.icon.src = imageSrc;
        this.ctx = this.canvas.getContext('2d');
        this.keys = {};
        this.radius = this.width/2;
    }

    updatePos() {
        this.y += this.speed;
    }

    draw() {
        this.updatePos();
        this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);
    }

    collisionDetect(obj){
        const totalRadius = this.radius + obj.radius;
        const totalDistance = Math.sqrt((this.x-obj.x)**2 + (this.y-obj.y)**2)

        if (totalRadius>=totalDistance){
            return true
        }else{
            return false
        }
    }
}

export default MovableObjects;