{/* <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
<div id="app"></div> */}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0,150,75);

// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();

// ctx.moveTo(10,10);
// ctx.lineTo(200,10);
// ctx.stroke();


var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);


console.log("Context",ctx);
