

class MyCircle extends fabric.Circle { 
 constructor(){
    super({
     left:(Math.random()*((750-1)+1))+1,
     top:(Math.random()*((450-1)+1))+1,
     radius: (Math.random() * 10) + 10,
     fill:"#" + Math.random().toString(10).slice(2, 8),
     
    });
   this.speed = 2;
   this.direction=[1,1];
  } // end of constructor
}



function init(canvas) {
  canvas.clear();
  console.log("starting exp1...");
  var circle=new MyCircle();
  canvas.add(circle);
  update(circle,canvas);
}

function update(circle,canvas) {
  circle.left += circle.speed * circle.direction[0];
  circle.top += circle.speed * circle.direction[1];
  if (circle.left <= 0) {
   circle.direction[0] = 1;
  }
  if ((circle.left + 2 * circle.radius) >= canvas.getWidth()) {
   circle.direction[0] = -1;
  }
  if (circle.top <= 0) {
   circle.direction[1] = 1;
  }
  if ((circle.top + 2 * circle.radius) >= canvas.getHeight()) {
   circle.direction[1]=-1;
  }
  canvas.renderAll();
  fabric.util.requestAnimFrame(function(){update(circle,canvas)});
}
module.exports = {
  exp1: function(canvas){
      init(canvas);
  }
  }