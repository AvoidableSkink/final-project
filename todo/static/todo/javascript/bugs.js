function changeImg()
{
var x = Math.floor(Math.random()*500);
var y = Math.floor(Math.random()*500);


var obj = document.getElementById("bug");

obj.style.top = x + "px";
obj.style.left = y + "px";


 }
 
function randomlyPlace(){
  var w=document.body.offsetWidth;
  var h=document.body.offsetHeight;
  var rd=document.getElementsByTagName('img');

for(var c=0;c<rd.length;c++) {
if(rd[c].className=='random') {
   var xCoord=Math.floor(Math.random()*w);
   var yCoord=Math.floor(Math.random()*h);

if(xCoord>=w-rd[c].offsetWidth-10){
   xCoord=w-rd[c].offsetWidth-10;
 }
if(xCoord<=10){
   xCoord=10;
 }

if(yCoord>=h-rd[c].offsetHeight-10){
   yCoord=h-rd[c].offsetHeight-10;
 }
if(yCoord<=10){
   yCoord=250;
 }

   rd[c].style.left=xCoord+'px';
   rd[c].style.top=yCoord+'px';
   }
  }
 }
window.addEventListener?
window.addEventListener('load',randomlyPlace,false):
window.attachEvent('onload',randomlyPlace);

randomlyPlace();