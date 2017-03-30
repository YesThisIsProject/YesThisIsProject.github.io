var ctx;
const moveX = 7;
const moveY = 7;
const width = 1000;
const height = 700;
const fps = 20;
var x = 7;
var y = 7;

const images = {
	front: [
		"media/screenshots/front-1.png",
		"media/screenshots/front-2.png"
	],
	back: [
		"media/screenshots/back-1.png",
		"media/screenshots/back-2.png"
	],
	left: [
		"media/screenshots/left-1.png",
		"media/screenshots/left-2.png"
	],
	right: [
		"media/screenshots/right-1.png",
		"media/screenshots/right-2.png"
	],
	special: "media/screenshots/special.png"
}

var clues = []

const sfx = "media/wow.mp3"

var img = new Image()
img.src = images.front[0]

var sound = new Audio(sfx)
console.log();
document.getElementById('fps').innerHTML = fps

function rect(x,y,w,h) {
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

function clear() {
	ctx.clearRect(0, 0, width, height);
}

// starting function
function init() {
	var canvas = document.getElementById("game");
	ctx = canvas.getContext("2d");
	for (var x = 0; x < 7; x++) {
		let xCoord = Math.floor(Math.random()*width)
		let yCoord = Math.floor(Math.random()*height)
		clues.push([xCoord, yCoord])
	}
	return setInterval(draw, fps); 
}

function doKeyDown(event){
	switch (event.keyCode) {
		case 87:  // W key down
			if (y - moveY > 0){
				y -= moveY;
			}
			img.src = images.back[y%2]
			break;
		case 83:  // S key down
			if (y + moveY < height){
				y += moveY;
			}
			img.src = images.front[y%2]
			break;
		case 65:  // A key downg
			if (x - moveX > 0){
				x -= moveX;
			}
			img.src = images.left[x%2]
			break;
		case 68:  // D key down
			if (x + moveX < width){
				x += moveX;
			}
			img.src = images.right[x%2]
			break;

		case 32:
			alert("Hey, that's pretty good")
			break
	}
}

function draw() {
	clear();
	ctx.fillStyle = "white";
	ctx.strokeStyle = "blue";
	rect(0,0,width,height);
	// for (var i = 0; i < 5; i++) {
	// 	ctx.fillStyle = "blue"
	// 	let xCoord = Math.floor(Math.random()*width)
	// 	let yCoord = Math.floor(Math.random()*height)
	// 	rect(xCoord, yCoord, 10, 10)
	// }
	// ctx.fillStyle = "purple";
	// circle(x, y, 10);
	ctx.fillStyle = "blue"
	for (var i = 0; i < clues.length; i++) {
		rect(clues[i][0], clues[i][1], 10, 10)
	}
	ctx.drawImage(img, x, y);
}

// Main part of program
init();
window.addEventListener('keydown',doKeyDown,true);
