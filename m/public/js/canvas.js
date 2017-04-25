$(document).ready(function(){
	canvas()
})
var canvas = function(){
	var c = $('.into')
	var ctx=c.get(0).getContext("2d");
	ctx.strokeStyle = '#000'
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo(0,100)
	ctx.lineTo(150 ,100)
	ctx.moveTo(80 ,70)
	ctx.lineTo(150 ,100)
	ctx.lineTo(80 ,130)
	ctx.stroke();
}
