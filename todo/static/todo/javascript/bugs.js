//move the bugs when clicked
var timer;
var points;
var currentFrame;
var frameCount = 60;

function move(me){
    var point = points[currentFrame++];
    
    me.style.left = point.x + "px";
    me.style.top = point.y + "px";
    
    console.log(me.style.left);
    
    // refire the timer until out-of-points
    if (currentFrame < points.length) {
        setTimeout(move(me), 8000);
    }
}

function linePoints(x1, y1, x2, y2, frames) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    var incrementX = dx / frames;
    var incrementY = dy / frames;
    var a = new Array();

    a.push({
        x: x1,
        y: y1
    });

    for (var frame = 0; frame < frames - 1; frame++) {
        a.push({
            x: x1 + (incrementX * frame),
            y: y1 + (incrementY * frame)
        });
    }
    a.push({
        x: x2,
        y: y2
    });
    return (a);
}

function clicked(me) {
    var newX = Math.floor(Math.random()*1000);
    var newY = Math.floor(Math.random()*500);
    
    var currentX = parseInt(me.style.left, 10);
    var currentY = parseInt(me.style.top, 10);

    // Put your mousedown stuff here
    points = linePoints(currentX, currentY, newX, newY, frameCount);
    currentFrame = 0;
    move(me);
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