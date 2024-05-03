import MovableObjects from "./movableObjects.js";
class Alien extends MovableObjects{
    constructor(canvas, alienSrc){
        const width = 50;
        const height = 50;
        const x = Math.random() * (canvas.width - width);
        const y = -height; // Place above the canvas
        super(canvas, alienSrc, x, y, width, height);
    }
}
export default Alien;