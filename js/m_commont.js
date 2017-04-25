$(document).ready(function(){
	var mydate = new Date();
	var t=mydate.toLocaleString();
	$(".time").text(t);
})