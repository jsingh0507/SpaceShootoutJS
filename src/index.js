//import neccessary classes for the game (various component of the games)
import Player from "./scripts/player.js";
import Alien from "./scripts/alien.js";
import Asteroid from "./scripts/asteroid.js";
import Projectile from "./scripts/projectile.js"
import Explosion from "./scripts/explosion.js";

//this code block try to retrive high scores if found nothing it initialize a default set of 3 high scores and saves to localStorage
let scores = JSON.parse(localStorage.getItem("high-scores"));
if (scores==null){
    scores = [["monkey", "0"],["john", "12"],["doe", "18"]];
    localStorage.setItem("high-scores", JSON.stringify(scores))
}

//displays the high scores on the page. it retrives the html element by it id = high-scores, the create a <li> and append them to high scores
let list = document.getElementById("high-scores");
scores.forEach(score =>{
    const listItem = document.createElement("li")
    listItem.innerText = `${score[0]}: ${score[1]}`
    list.appendChild(listItem);
})

//initalize the game canvas, player, an other game related variables
const canvas = document.getElementById("game-canvas")
let player = new Player(canvas,"./src/icons/ship1.png",(canvas.width/2),canvas.height-60,80,60);
let arr = [];   //this array hold the objects like asteroids and aliens
const projectiles = []; //this array holds the shots (projectile) of the player
const score = document.getElementById("score"); //retrieve the score element from html bi its id
const lives = document.getElementById("lives"); //same here but for lives
const explosion = [];  // this array holds the explosion effects(the little projectiles effects on collision)
let usernameG="";     // this to hold the username of the player
let isGame = false;   //to track if game is running 
let isUpdated = false; //to track if high score needs to be updated

//this block is for the backround music 
const backgroundMusic = document.getElementById("background-music");
backgroundMusic.volume = 0.1
const toggleAudioButton = document.getElementById("audio-button");  //seta up a button to turn on/off the audio
function toggleAudio() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        backgroundMusic.volume = 0.1;
        toggleAudioButton.textContent = "Audio: On";
    } else {
        backgroundMusic.pause();
        toggleAudioButton.textContent = "Audio: Off";
    }
}
// Add event listener to the toggle audio button
toggleAudioButton.addEventListener("click", toggleAudio);


// for the welcome message
canvas.style.display = "block"
const ctx = canvas.getContext('2d');
ctx.font = '30px Arial';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.fillText('Welcome to Space Shootout!', canvas.width / 2, canvas.height / 2);

// Event listener for the start button
document.getElementById("start-button").addEventListener("click", () => {
    backgroundMusic.play();
    if (!isGame) {
        const username = prompt("Please enter your username:");
        if (username) {
            canvas.style.display = "block";
            isGame = true;
            startGame(username);
            document.getElementById("start-button").textContent = "Restart";
        } else {
            alert("Username is required to start the game.");
        }
    }
});

//start game function
function startGame(username) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.setUsername(username);
    usernameG = player.username;
    // console.log(player.username)
    animate();
}

// Event listener for shooting projectiles when key is pressed and released
document.addEventListener("keydown", (event) => {
    if (event.key === ' ') {
        const shootSound = document.getElementById("shoot-sound");
        shootSound.volume = 0.6;
        if (toggleAudioButton.textContent == "Audio: Off") {
            shootSound.pause();
        } else{
            shootSound.play();
        }
        projectiles.push(new Projectile(canvas, player.x, player.y));
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


//these block spawn enemies randmoly 
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


//removes enemies from the screen and memory
function removeObj(){
    for (let i=0; i<arr.length; i++){
        if (arr[i].y > canvas.height){
            arr.splice(i,1);
        }
    }
}

//animation function where the actual logic is imlemented
function animate(){
    if (!isGame) return;

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
                explosion.push(new Explosion(canvas, player.x, player.y, 'purple'));
            }
            arr = [];
            player = new Player(canvas,"./src/icons/ship1.png",canvas.width/2,canvas.height-60,80,60);
            player.draw();
            if (parseInt(lives.textContent)==1){
                lives.textContent = parseInt(lives.textContent) - 1;
                let currentScore = parseInt(score.textContent);
                for (let i = 0; i < scores.length; i++) {
                    if (currentScore > scores[i][1]) {
                        scores[i][0]=usernameG;
                        scores[i][1]=currentScore;
                        isUpdated = true;
                        break;
                    }
                }
                if (isUpdated) {
                    localStorage.setItem("high-scores", JSON.stringify(scores));
                    let list = document.getElementById("high-scores");
                    list.innerHTML = "";
                    scores.forEach(score => {
                        const listItem = document.createElement("li");
                        console.log(score[0])
                        listItem.innerText = `${score[0]}: ${score[1]}`;
                        list.appendChild(listItem);
                    });
                }
                return null;
            }else {
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
    requestAnimationFrame(animate);
    // debugger
    // console.log(`prokjectiles length after deleting: ${projectiles}`);
}
animate()





