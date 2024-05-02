import Player from "./scripts/player.js";
window.Player = Player;
const canvas = document.getElementById("game-canvas")
const player = new Player(canvas,"./ship.png",0,0,50,50);
// debugger
player.draw();
console.log(player)


