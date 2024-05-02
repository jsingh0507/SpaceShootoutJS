import Player from "./scripts/player.js";
window.Player = Player;
const canvas = document.getElementById("game-canvas")
const player = new Player(canvas,"./src/icons/ship1.png",350,625,80,60);
// debugger

function animate(){
    requestAnimationFrame(animate);
    player.draw();
}

animate()
// console.log(player)


