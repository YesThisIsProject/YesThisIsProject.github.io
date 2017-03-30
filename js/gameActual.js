// stop errors
let context
// how much the characters move
const moveX = 7
const moveY = 14
// starting positions
var x = 410
var y = 350
var manX = 290
var manY = 25
// height and width of the canvas
const width = 910
const height = 500
// frames drawn per second
const fps = 60
document.getElementById('fps').innerHTML = `in ${fps} FPS`

// Making it easy to get sources using an object
const src = {
	man: "media/fallingMan.png",
	clinton: "media/Clinton-face.png",
	song: "media/song.mp3"
}

var hero = new Image()
hero.src = src.clinton
// setting up images
var evil = new Image()
evil.src = src.man

// set up song and play it
var song = new Audio(src.song)
song.play()

// declare clear function with arrow function notation
var clear = () => context.clearRect(0, 0, width, height)

// rect function (to draw rectangles) used for backgrounds by setting width and height to the variables width and height
var rect = function(x, y,width,height){
	context.beginPath()
	context.rect(x,y,width,height)
	context.closePath()
	context.fill()
	context.stroke()
}
// character key controls using event.keycode
var keyCtrl = function (event){
	let code = event.keyCode
	if(code == 37){
		x -= moveX
	}
	else if (code == 39){
		x += moveX
	}
	// movement for the dude
	else if (code == 65) manX -= moveX
	else if (code == 83) manY += moveY
	else if (code == 68) manX += moveX
	if (manY > height){
		if (confirm("He went SPLAT! play again?") == true){
			location.reload()
		}
		else {
			location.reload()
		}
	}
	if (manY == y - 50 && manX == x - 100){
		if (confirm("Hillary confirmed dead as falling man hits her. Witness: 'it's raining men!, Hallelujah!'")) {
			location.reload()
		}
		else {
			location.reload()
		}
	}
}

// draw background and images
var draw = function() {
	clear()
	context.fillStyle = "darkblue"
	context.strokeStyle = "grey"
	rect(0,0,width,height)
	context.drawImage(hero, x, y)
	context.drawImage(evil, manX, manY)
}
// main running function
function init() {
	var canvas = document.getElementById("game")
	context = canvas.getContext("2d")
	return setInterval(draw, fps)
}
// run the program
init()
window.addEventListener('keydown',keyCtrl,true)