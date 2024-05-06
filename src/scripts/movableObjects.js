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
    }

    updatePos() {
        this.y += this.speed;
    }

    draw() {
        this.updatePos();
        this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);
    }
}

export default MovableObjects;