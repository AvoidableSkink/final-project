function changeImg()
{
var x = Math.floor(Math.random()*300);
var y = Math.floor(Math.random()*300);


var obj = document.getElementById("emotion");

obj.style.top = x + "px";
obj.style.left = y + "px";


 }