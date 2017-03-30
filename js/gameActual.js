// stop errors
let context
// how much the
const moveX = 7
var x = 410
var y = 350
const width = 910
const height = 500
const fps = 60
var count = 1
document.getElementById('fps').innerHTML = `in ${fps} FPS`
const src = {
	man: "media/fallingMan.png",
	clinton: "media/Clinton-face.png",
	song: "media/song.mp3"
}

var hero = new Image()
hero.src = src.clinton

var song = new Audio(src.song)
song.play()
var clear = () => context.clearRect(0, 0, width, height)

var rect = function(x, y,width,height){
	context.beginPath()
	context.rect(x,y,width,height)
	context.closePath()
	context.fill()
	context.stroke()
}

var keyCtrl = function (event){
	let code = event.keyCode
	if(code == 37){
		x = x - moveX
		console.log(37)
	}
	else if (code == 39){
		x += moveX
		console.log(39)
	}
}


var draw = function() {
	clear()
	context.fillStyle = "darkblue"
	context.strokeStyle = "grey"
	rect(0,0,width,height)
	context.drawImage(hero, x, y)
}

function init() {
	var canvas = document.getElementById("game")
	context = canvas.getContext("2d")
	return setInterval(draw, fps)
}

init()
window.addEventListener('keydown',keyCtrl,true)