/* typing text */

const text = "Someone once told me about a fig tree...";
let i = 0;

function type(){
if(i < text.length){
document.getElementById("text").innerHTML += text.charAt(i);
i++;
setTimeout(type,40);
}
}

type();

/* show figs then leave one */

const figs = document.querySelectorAll(".fig");

setTimeout(()=>{
figs.forEach(f=>f.classList.add("show"));
},4000);

setTimeout(()=>{

figs.forEach((f,index)=>{
if(index !== 0){
f.style.opacity="0.2";
}
});

figs[0].classList.add("final");

figs[0].onclick=function(){
window.location.href="main.html";
}

},7000);


/* floating leaves */

for(let i=0;i<20;i++){

let leaf = document.createElement("div");
leaf.classList.add("leaf");

leaf.style.left=Math.random()*100+"vw";
leaf.style.animationDuration=(5+Math.random()*10)+"s";

document.body.appendChild(leaf);

}


function openLetter(num)
{

document.getElementById("letterBox").style.display="flex";

/* hide characters */
document.querySelector(".characters").style.display="none";

/* hide music player */
document.querySelector(".music").style.display="none";



let box = document.getElementById("letterBox");
let text = document.getElementById("letterText");

box.style.display="flex";

if(num === 1){
text.innerHTML="I know am difficult to understand..I always have been forever(now you know why I don't have any friends)but I just want you to know that am just really sorry to you..for even the minor inconvenience I might have caused you..lets face it I have issues...nothing wrong with it am trying my best....on that day(3rd)I went foreward and checked my texts....and you should have seen me lol...20 texts back to back to a girl whom I have known for 3 weeks{meh tere jagah hotah toh police meh call jatah}...and am just really sorry for it.That day you said I liked you coz you happen to look like a 'girl I liked once'..which really stinged me and it still does.....the truth is I liked you becoz-there is no reason..and there should be never a reason...I liked you coz you are you....coz for once I felt I can talk to someone without getting insecured, getting judged,talking to you felt like breaking free from chains with which I was born...and I will always be grateful to you for that"
}
if(num === 2){
text.innerHTML = `
 anyway bhul jao woh sab....HAPPY BIRTHDAY YARR...Omg your finally turning 18.Your like one of the best person I have ever met..I hope you enjoy  this day with frnds and family coz noone deserves he warmth of relations more than you ..period..love you gurl..one more year..but a lot more iconic and a lot more bolder...just keep that smile of yours forever.(i could'nt buy you a cake so I made one lol) [ON BOTTOM RIGHT CORNER CLICK THAT MUSIC OPTION]
<br><br>
<button onclick="showCake()">Click here for your cake 🎂</button>
`;
}





if(num === 3){
text.innerHTML="I hope you read the first 2 letters before reading this....I don't know how your viewing this small gift(you better be smiling coz of the coding I hadda pull off for this lol)but this is not any of those'try my last best shot'or'impress her'or'win her back'..I just feel i disappoint anyone who trusts me and believes me so just wanted to say sorry and also wish you...and last but not the least AM SORRY TO SHRI AS THAT DAY I SAID SOME THINGS I SHOUL'NT HAVE ..REALLY REGRET THEM..I WAS JUST NOT IN THE RIGHT STATE OF MIND..(makes me an  idiot and douchebag)..so sorry to him....and so!!ALL THE BEST [ you just met me at a very bad time in my life omg] just stay happy forever touchwood touchwood :D AND AND AND WAIT WAIT ..there is a audio player below....I have never seen you in a sunset ...but if you were ever in a sunset smiling with those brown eyes ...this song would be playing";
}

}

function closeLetter()
{
    document.getElementById("letterBox").style.display="none";

/* show characters again */
document.querySelector(".characters").style.display="block";

/* show music player again */
document.querySelector(".music").style.display="block";


document.getElementById("letterBox").style.display="none";

}
function letter1Effect(){

for(let i=0;i<40;i++){

let confetti=document.createElement("div")
confetti.className="confetti"
confetti.style.left=Math.random()*100+"vw"

document.body.appendChild(confetti)

setTimeout(()=>confetti.remove(),3000)
}
}

function letter2Effect(){

for(let i=0;i<30;i++){

let heart=document.createElement("div")
heart.className="heart"
heart.innerHTML="💖"
heart.style.left=Math.random()*100+"vw"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),3000)
}
}

function letter3Effect(){

for(let i=0;i<80;i++){

let confetti=document.createElement("div")
confetti.className="confetti"
confetti.style.left=Math.random()*100+"vw"

document.body.appendChild(confetti)

setTimeout(()=>confetti.remove(),4000)

}

/* move characters to center */

let chars=document.querySelectorAll(".char")

chars.forEach(char=>{
char.classList.add("centerMove")
})

/* show birthday message */

setTimeout(()=>{
document.getElementById("birthdayScene").style.opacity=1
},2000)

}
function toggleMusic(){

let music = document.getElementById("bgMusic")

if(music.paused){
music.play()
}else{
music.pause()
}

}
function showCake(){

document.getElementById("cakeScene").style.display="flex"

}

function blowCandles(){

let flames=document.querySelectorAll(".flame")

flames.forEach(f=>{
f.classList.remove("flame")
})

document.getElementById("blowBtn").style.display="none"

document.getElementById("wishBtn").style.display="inline-block"

}

function makeWish(){

alert("Make a wish 🌟")

}
function showCake(){
document.getElementById("cakeScene").style.display = "flex";
}

function blowCandles(){
let flames = document.querySelectorAll(".flame");

flames.forEach(f => {
f.style.opacity = "0";
});

document.getElementById("blowBtn").style.display="none";
document.getElementById("wishBtn").style.display="inline-block";
}

function makeWish(){
alert("Your wish is sealed in the stars ✨");
}

function showCake(){
document.getElementById("cakeScene").style.display = "flex";
}
function showCake(){
document.getElementById("cakeScene").style.display = "flex";
}

function blowCandles(){
let flames = document.querySelectorAll(".flame");
flames.forEach(f => f.style.opacity = "0");

document.getElementById("wishBtn").style.display = "block";
}

function makeWish(){
alert("Your wish has been sent to the universe ✨");
}


