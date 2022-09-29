var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;
let speed = null;
var timeout = setTimeout(() => {
    alert("Session expired!")
}, 30000);


// Move the image on screen with 10px
function dogWalk() {
    var img = document.getElementsByTagName("img")[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + movePixels + "px";
    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
        img.style.left = "0px";
    }

}
// Call dogWalk function every 50 ms
function startDogWalk() {
    dogTimer = window.setInterval(dogWalk, delayMs);
    speed = movePixels / (delayMs / 1000);
    document.getElementById("info").textContent = speed;
    clearTimeout(timeout);

}
function speedUpDog() {
    dogTimer = window.setInterval(dogWalk, 10);
    speed = movePixels / (10 / 1000);
    document.getElementById("info").textContent = speed;
    clearTimeout(timeout);
    document.getElementById("start-button").setAttribute("disabled", "disabled");
}

function dogStop() {
    clearInterval(dogTimer);
    speed = 0 / (delayMs / 1000);
    document.getElementById("info").textContent = speed;
    clearTimeout(timeout);
}
function resetSpeed() {
    clearInterval(dogTimer);
    startDogWalk();
    speed = movePixels / (delayMs / 1000);
    document.getElementById("info").textContent = speed;
    clearTimeout(timeout);
}

document.getElementById("start-button").addEventListener("click", startDogWalk);
document.getElementById("stop-button").addEventListener("click", dogStop);
document.getElementById("speed-button").addEventListener("click", speedUpDog);

const btn = document.createElement("BUTTON");
btn.textContent = "Reset Speed";
document.body.appendChild(btn);
btn.id = "reset-button";
btn.addEventListener("click", resetSpeed);



