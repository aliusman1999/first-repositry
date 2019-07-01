
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



$('#can').click(function(){  
    var c = new $("canvas");

   var ctx = c[0].getContext('2d');
  ctx.beginPath();
   ctx.arc(20,30,10,0,2*Math.PI);
   
   ctx.moveTo(90,30);
   
   ctx.arc(80,30,10,0,2*Math.PI);
   ctx.moveTo(40,70);
   
   ctx.arc(30,70,10,0,2*Math.PI);
   ctx.stroke();
   var i;
   for (i = 0; i < c.length; i++) {
   c[i].addEventListener("click", color);
   }
   function color(){
    
    ctx.fill();
   }
    

  });

  //moving a circle
  var mouseX = 0;
var mouseY = 0;
  function setMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }    
  function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }
  var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;
 
canvas.addEventListener("mousemove", setMousePosition, false);
 
function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}
function update() {
    context.beginPath();
    context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
    context.fillStyle = "#FF6A6A";
    context.fill();
   
    requestAnimationFrame(update);
  }
  update();
  function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
   
    context.beginPath();
    context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
    context.fillStyle = "#FF6A6A";
    context.fill();
   
    requestAnimationFrame(update);
  }    
  canvas.addEventListener("mousemove", setMousePosition, false);
 
function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
 
  context.clearRect(0, 0, canvas.width, canvas.height);
 
  context.beginPath();
  context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();
}