window.onload = init;

let canvas;
let ctx;

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
let barH = 120;


function init () {

	//*get a refrence*//
	let btn = document.querySelector("#btnname"); 
	let game = document.querySelector(".gamecontainer");
	btn.addEventListener("click", showInfo) ;

	canvas = document.querySelector("#mycanvas");
	ctx = canvas.getContext("2d");

	canvas.addEventListener("mousemove", mouseTrack)


 // draw();
 // drawCar();
 // drawBall ();


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

 score = 0;


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

	

	if (X > canvas.width+10) 
	{	
		alert ("GameOver your score " + score)
		resetGame();
		
	}
	if (X-50 <0)
		dX = dX * -1;

	if(Y - R <0)
		dY = dY * -1;

	if(Y - R > canvas.height-45)
		dY = dY * -1;

	if (X > barX )
	{
		if(Y > barY && Y < barY + barH+20)
		dX = dX * -1;
		score+=1
		R -= 0.01;
		dX = dX * 1.01;
	}


	X += dX
	Y += dY



	document.querySelector("#gamescore").innerHTML = score
}	




function drawCar(){

	ctx.clearRect(0,0,500,500);
	
	ctx.beginPath();
	ctx.fillStyle = "blue";

	X+=1;

	ctx.fillRect (X,Y,W,H);
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.arc(X+30,Y+H,20,0, 2* Math.PI, false);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.arc(X+W-30,Y+H,20,0, 2* Math.PI, false);
	ctx.fill();
	ctx.closePath();

}





function draw(){

	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.strokeStyle = "aqua";
	ctx.lineWidth = 1 ;
	// ctx.fillRect( x , y , width , hight );
	ctx.rect(0,0,500,160);
	ctx.fill();
	ctx.stroke();

	ctx.closePath(); /*end*/


	ctx.beginPath();
	ctx.fillStyle = "green";
	ctx.strokeStyle = "aqua";
	ctx.lineWidth = 1 ;
	// ctx.fillRect( x , y , width , hight );
	ctx.rect(0,340,500,160);
	ctx.fill();
	ctx.stroke();

	ctx.closePath(); /*end*/

	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.strokeStyle = "aqua";
	ctx.lineWidth = 1 ;
	// ctx.fillRect( x , y , width , hight );
	ctx.rect( 0 , 160 , 500 , 180 );
	ctx.fill();
	ctx.stroke();

	ctx.closePath(); /*end*/


	ctx.beginPath();
	ctx.arc(250,250,50,0, 2 * Math.PI , false );
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.beginPath();

	ctx.moveTo(100,100);
	ctx.lineTo(200,100);
	ctx.lineTo(200,200);
	ctx.lineTo(100,100);


	ctx.lineWidth = 2;
	ctx.strokeStyle = "black";
	ctx.fillStyle = "green";
	ctx.fill () ;
	ctx.stroke() ;
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

	// let box = document.querySelector("#container")
	// let hElement = document.createElement("h2")
	// hElement.innerHTML = "your score : 0 "
	// box.appendChild(hElement);

	// inptxt.value="";

	// let aElement = document.createElement("a")
	// aElement.innerHTML = "click here"
	// aElement.href = "https://www.soja.ir"
	// aElement.style = "color:red"
	
	
	
	
	// alert("welcome to game " + inptxt.value); 

}
