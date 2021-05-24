window.onload = init;

let canvas;
let ctx;
let b;

let X = 150;
let Y = 300;

let W = 200;
let H = 100;
let R = 20;
let dX = 5;
let dY = 5;

let score = 0;


let barX = 490;
let barY = 230;
let barW = 10;
let barH = 150;


function init () {

	let btn = document.querySelector("#btnname"); 
	let game = document.querySelector(".gamecontainer");
	btn.addEventListener("click", showInfo) ;
	canvas = document.querySelector("#mycanvas");
	ctx = canvas.getContext("2d");

	canvas.addEventListener("mousemove", mouseTrack)

 function mouseTrack(e){
 	barY = e.clientY - canvas.offsetTop;
 }
}

 

function drawBar (){


ctx.beginPath();
ctx.rect(barX,barY,barW,barH);
ctx.closePath();
ctx.fillStyle ="blue"
ctx.fill ();
 
}
function resetGame(){

 X = 150;
 Y = 300;

 W = 200;
 H = 100;
 R = 20;
 dX = 5;
 dY = 5;

 barX = 490;
 barY = 230;
 barW = 10;
 barH = 120;	

}

function drawBall(){

	ctx.clearRect(0,0,canvas.width,canvas.height);

	ctx.beginPath();
	ctx.arc(X-30,Y,R,0, 2* Math.PI, false);
	ctx.closePath();
	ctx.fillStyle = "red";
	ctx.fill();
	
	if (X > canvas.width + R*2 ) 
	{	

		alert ("GameOver your score " + score)
		score = 0
		resetGame()
	}

	if (X-R*2 <0)
		dX = dX * -1;

	if(Y - R <0)
		dY = dY * -1;

	if(Y - R > canvas.height-45)
		dY = dY * -1;

	if (X > barX && Y+R  > barY && Y < barY + barH )
	{
		dX = dX * -1;
		R -= 0.05;
		dX = dX * 1.05;
		barH -= 0.05;
		score = score + 1;
	} 


	X += dX
	Y += dY



	document.querySelector("#gamescore").innerHTML = score
}	



function showInfo () {

	let inptxt = document.querySelector("#textusername");
	let title = document.querySelector("#textTitle");
	title.innerHTML = "welcome to game " + inptxt.value + "!";
	setInterval(drawGame , 20);
	
	function drawGame(){

	 	drawBall();
     	drawBar (); 
     }

}
