import Player from "./scripts/player.js";
import Alien from "./scripts/alien.js";
import Asteroid from "./scripts/asteroid.js";

// window.Player = Player;
const canvas = document.getElementById("game-canvas")
const player = new Player(canvas,"./src/icons/ship1.png",350,625,80,60);
const alien = new Alien(canvas,"./src/icons/alien.png");
const asteroid = new Asteroid(canvas,"./src/icons/Asteroid_1.png");
// debugger

function animate(){
    requestAnimationFrame(animate);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    asteroid.draw();
    alien.draw();
    player.draw();
    
}

animate()



