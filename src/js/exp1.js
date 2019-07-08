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

$('#can').click(function() {
  canvas.setHeight(500);
  canvas.setWidth(800);
  canvas.clear();
  var obj=new MyCircle();
  canvas.add(obj);
  console.log(obj);
  animate(obj);
});

function animate(obj) {
  obj.left += obj.x * obj.direction[0];
  obj.top += obj.x * obj.direction[1];
  canvas.renderAll();
  
  if (obj.left <= 0) {
   obj.direction[0] = 1;
  }

  if ((obj.left + 2 * obj.radius) >= canvas.getWidth()) {
   obj.direction[0] = -1;
  }
  if (obj.top <= 0) {
   obj.direction[1] = 1;
  }
  if ((obj.top + 2 * obj.radius) >= canvas.getHeight()) {
   obj.direction[1]=-1;
  }
  fabric.util.requestAnimFrame(function(){animate(obj)});
}