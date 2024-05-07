import Player from "./scripts/player.js";
import Alien from "./scripts/alien.js";
import Asteroid from "./scripts/asteroid.js";
import Projectile from "./scripts/projectile.js"
import Explosion from "./scripts/explosion.js";


// window.Player = Player;
const canvas = document.getElementById("game-canvas")
let player = new Player(canvas,"./src/icons/ship1.png",(canvas.width/2)-40,canvas.height-60,80,60);
let arr = [];
const projectiles = [];
const score = document.getElementById("score");
const lives = document.getElementById("lives");
const explosion = [];

// Event listener for shooting projectiles
document.addEventListener("keydown", (event) => {
    if (event.key === ' ') {
        projectiles.push(new Projectile(canvas, player.x + player.width / 2, player.y));
        // console.log(`prokjectiles length before deleting: ${projectiles.length}`);
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === ' ') {
        projectiles.forEach(projectile => {
            projectile.stopShooting();
        });
    }
});
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
    player.draw();
    for (let i = 0; i < explosion.length; i++) {
        if (explosion[i].opacity<=0){
            setTimeout(() =>{
                explosion.splice(i, 1);
            },0)
        }else{
            explosion[i].update();
        }
    }
    for (let i=0; i<arr.length; i++){
        arr[i].draw();
        if (player.collisionDetect(arr[i])){
            for (let c = 0;c<10;c++){
                explosion.push(new Explosion(canvas, arr[i].x, arr[i].y, 'red'));
                explosion.push(new Explosion(canvas, player.x+player.width/2, player.y+player.height/2, 'purple'));
            }
            arr = [];
            player = new Player(canvas,"./src/icons/ship1.png",canvas.width/2,canvas.height-60,80,60);
            player.draw();
            if (parseInt(lives.textContent) > 0) {
                lives.textContent = parseInt(lives.textContent) - 1;
            }
        }
    }
    removeObj()
    // console.log(arr.length)
    for(let j=0; j<projectiles.length;j++){
        if(projectiles[j].y + 5 <= 0){
            projectiles.splice(j, 1);
        }else{
            projectiles[j].update();
            for (let k=0;k<arr.length;k++){
                if (arr[k].collisionDetect(projectiles[j])){
                    for(let c=0;c<10;c++){
                        explosion.push(new Explosion(canvas, arr[k].x, arr[k].y,'#C79306'));
                    }
                    // console.log(explosion)
                    arr.splice(k,1);
                    projectiles.splice(j,1);
                    let currentScore = parseInt(score.textContent); // Get the current score as a number
                    currentScore += 1; // Increment the score
                    score.textContent = currentScore; // Update the score on the page
                }
            }
        }
    }

    // debugger
    // console.log(`prokjectiles length after deleting: ${projectiles}`);
}
animate()





