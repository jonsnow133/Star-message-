window.onload = function(){

let flash = document.getElementById("lampFlash");

flash.classList.add("startGlow");

}

function openLetter(){

let flash = document.getElementById("lampFlash");

flash.style.opacity = "1";

setTimeout(function(){
window.location="letter.html";
},1000);

}

function secretSpot(){
window.location="secret.html";
}


function createDust(){

let container = document.getElementById("dustContainer");

for(let i=0;i<25;i++){

let dust = document.createElement("div");

dust.className="dust";

dust.style.left = Math.random()*100 + "%";
dust.style.top = Math.random()*100 + "%";

dust.style.animationDuration = (6 + Math.random()*6) + "s";

container.appendChild(dust);

}

}

createDust();
window.addEventListener("DOMContentLoaded", function(){

let music = document.getElementById("bgMusic");

music.volume = 0.35;

document.body.addEventListener("click", function(){

music.play();

},{once:true});

});