import MovableObjects from "./movableObjects.js";

class Asteroid extends MovableObjects{
    constructor(canvas, asteroidSrc){
        const width = 50;
        const height = 50;
        const x = Math.random() * (canvas.width - width);
        const y = -height; // Place above the canvas
        super(canvas, asteroidSrc, x, y, width, height);
    }
}
export default Asteroid;