document.addEventListener("keydown", startGame);

var botom = "./image/bottom.png";
var left = "./image/left.png";
var right = "./image/right.png";
var topimg = "./image/top.png";


var arrowKeys = [botom, left, right, topimg];
let arrowKeyCode;


var video = document.getElementsByTagName("video")[0];
var img = document.createElement("img");

let winCounter = 0;
let seconds = 0;
let timerId;


function starTimer() {
    timerId = setInterval(function(){
        seconds++;
        document.getElementById("tiempo").innerHTML = "Tiempo: " + seconds + " segundos";
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}


function startGame(event) {

    if (event.keyCode == 32 ) {
        starTimer();
        document.body.style.backgroundColor = "white";
        document.removeEventListener("keydown", startGame);
        video.parentNode.replaceChild(img, video);
        showArrow();
        document.addEventListener("keydown", playGame);
        
    }
}

function playGame(event) {
    if(event.code == "ArrowLeft" && arrowKeyCode == left) {
        winCounter += 1;
        document.getElementById("container").style.backgroundColor = "green";
        document.getElementById("intentos").innerHTML = "Intentos: "+winCounter;
        
    } else if(event.code == "ArrowUp" && arrowKeyCode == topimg) {
        winCounter += 1;
        document.getElementById("container").style.backgroundColor = "green";
        document.getElementById("intentos").innerHTML = "Intentos: "+winCounter;

    } else if(event.code == "ArrowRight" && arrowKeyCode == right) {
        winCounter += 1;
        document.getElementById("container").style.backgroundColor = "green";
        document.getElementById("intentos").innerHTML = "Intentos: "+winCounter;

    } else if(event.code == "ArrowDown"&& arrowKeyCode == botom) {
        winCounter += 1;
        document.getElementById("container").style.backgroundColor = "green";
        document.getElementById("intentos").innerHTML = "Intentos: "+winCounter;

    } else {
        stopTimer();
        winCounter = 0;
        document.getElementById("container").style.backgroundColor = "red";
        document.getElementById("intentos").innerHTML = "Intentos: "+winCounter;

    }


    if (winCounter === 3) {
        document.getElementById("intentos").innerHTML = "Intentos: "+winCounter;
        stopTimer();
        alert("¿Has ganado el juego!");
        document.removeEventListener("keydown", playGame);
    } else {
        showArrow();
    }
}

function showArrow() {
    const randomArrow = Math.floor(Math.random() * arrowKeys.length);
    arrowKeyCode = arrowKeys[randomArrow];
    img.src = arrowKeyCode;
    img.width = 200;

}

