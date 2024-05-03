import Player from "./scripts/player.js";
import Alien from "./scripts/alien.js";
import Asteroid from "./scripts/asteroid.js";

// window.Player = Player;
const canvas = document.getElementById("game-canvas")
const player = new Player(canvas,"./src/icons/ship1.png",350,625,80,60);
const arr = [player];
// debugger

setTimeout(function spawn(){
    arr.push(new Alien(canvas,"./src/icons/alien.png"));
    arr.push(new Asteroid(canvas,"./src/icons/Asteroid_1.png"));
    setTimeout(spawn,3000);
}, 2000);
// debugger

function animate(){
    requestAnimationFrame(animate);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    // asteroid.draw();
    // alien.draw();
    // player.draw();
    if (arr.length>5){
        arr.splice(1,2);
    }
    for (let i=0; i<arr.length; i++){
        arr[i].draw();
    }
    // debugger
    
}
animate()




