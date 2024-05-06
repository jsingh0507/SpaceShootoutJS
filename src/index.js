import Player from "./scripts/player.js";
import Alien from "./scripts/alien.js";
import Asteroid from "./scripts/asteroid.js";

// window.Player = Player;
const canvas = document.getElementById("game-canvas")
const player = new Player(canvas,"./src/icons/ship1.png",canvas.width/2,canvas.height-60,80,60);
const arr = [];
// debugger

setTimeout(() => {
    const randomDelay = Math.random()*5000;
    setTimeout(spawn,randomDelay);
}, Math.random()*5000);

function spawn(){
    const randomObj = Math.random();
    if (randomObj < 0.5){
        arr.push(new Alien(canvas,"./src/icons/alien.png"));
    }else{
        arr.push(new Asteroid(canvas,"./src/icons/Asteroid_1.png"));
    }
    setTimeout(spawn, Math.random() * 5000);
}

function removeObj(){
    for (let i=0; i<arr.length; i++){
        if (arr[i].y > canvas.height){
            arr.splice(i,1);
        }
    }
}

function animate(){
    requestAnimationFrame(animate);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    // asteroid.draw();
    // alien.draw();
    player.draw();
    for (let i=0; i<arr.length; i++){
        arr[i].draw();
    }
    removeObj()
    console.log(arr.length)
}
animate()




