const sky=document.getElementById("sky")
const popup=document.getElementById("popup")
const music=document.getElementById("bgmusic")

/* start music after first tap */

document.addEventListener("click",()=>{
music.play()
},{once:true})

/* create background stars */

for(let i=0;i<350;i++){

let star=document.createElement("div")

star.className="star"

star.style.left=Math.random()*window.innerWidth+"px"
star.style.top=Math.random()*window.innerHeight+"px"

sky.appendChild(star)

}

/* RANDOM SHOOTING STARS */

function meteor(){

let m=document.createElement("div")
m.className="meteor"

let startX=Math.random()*window.innerWidth
let startY=Math.random()*window.innerHeight*0.6

m.style.left=startX+"px"
m.style.top=startY+"px"

let angle=(Math.random()*40)+20
m.style.transform=`rotate(${angle}deg)`

sky.appendChild(m)

setTimeout(()=>{
m.remove()
},1500)

}

/* random meteors */

setInterval(()=>{

meteor()

if(Math.random()>0.5) meteor()
if(Math.random()>0.7) meteor()
if(Math.random()>0.85) meteor()

},1200)

/* MESSAGE FUNCTION */

function showMessage(text){

popup.innerText=text
popup.style.display="block"

setTimeout(()=>{
popup.style.display="none"
},4000)

}

/* 4 BRIGHT MESSAGE STARS */

const messages=[
"Thanks sarkar for everything....",
"Just stay happy happy always it really suits you.....",
" Remember even galaxies feel quiet compared to your presence.",
"Not every star shines the same… you shine differently."
]

for(let i=0;i<4;i++){

let s=document.createElement("div")

s.className="star"

s.style.width="5px"
s.style.height="5px"
s.style.boxShadow="0 0 12px white"

s.style.left=Math.random()*window.innerWidth+"px"
s.style.top=Math.random()*window.innerHeight+"px"

s.style.cursor="pointer"

s.onclick=()=>showMessage(messages[i])

sky.appendChild(s)

}

/* HIDDEN SECRET STAR */

let secret=document.createElement("div")

secret.className="star"

secret.style.width="3px"
secret.style.height="3px"
secret.style.opacity="0.6"

secret.style.left="78%"
secret.style.top="22%"

secret.style.cursor="pointer"

sky.appendChild(secret)

/* TYPEWRITER MESSAGE */

const longMessage=`Sarkar,

.  I wish..

.   I wish you knew how much our little talks and the time we spend together mean to me. You're honestly my favorite person. Every moment with you feels special, like something I never want to end.You make everything lighter, softer, better. Just, thinking about you makes me smile like an idiot.
.  Thank you for being you, for letting me in, for making my world a little brighter every day..

.  Maybe this universe is too large
. for words to describe what a single star means.
. Yet somehow,
. in this infinite sky,
.   my eyes still find you.

.    Always.`

secret.onclick=()=>{

window.location.href="letter.html"

}