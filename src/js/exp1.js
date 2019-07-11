import 'fabric/dist/fabric.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { inherits } from 'util';
import { NONAME } from 'dns';
import { listenerCount } from 'cluster';

class MyCircle extends fabric.Circle { 
 constructor(){
    super({
     left:(Math.random()*((750-1)+1))+1,
     top:(Math.random()*((450-1)+1))+1,
     radius: (Math.random() * 10) + 10,
     fill:"#" + Math.random().toString(10).slice(2, 8),
    });
   this.x = 2;
   this.direction=[1,1];
  } // end of constructor
}

var canvas = new fabric.Canvas('canvas');

$('#exp1').click(function() {
  canvas.clear();
  console.log("starting exp1...");
  var circle=new MyCircle();
  canvas.add(circle);
  animate(circle);
});

function animate(circle) {
  circle.left += circle.x * circle.direction[0];
  circle.top += circle.x * circle.direction[1];
  canvas.renderAll();
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
  fabric.util.requestAnimFrame(function(){animate(circle)});
}