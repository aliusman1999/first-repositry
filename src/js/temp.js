import 'fabric/dist/fabric.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { inherits } from 'util';
import { NONAME } from 'dns';
import { listenerCount } from 'cluster';

// var circle;
$('#can').click(function(){
$(document).ready(function init(){
 
  canvas.setHeight(500);
  canvas.setWidth(800);
 // $('canvas').bind("click",obj.test);
 //c2.on('selected',obj.test);
 
});



  console.log("ali");
  var canvas = new fabric.Canvas('canvas');

  class MyCircle {
    
     constructor(){
        (function animate() {
          canvas.getObjects().forEach(function(obj) {
            obj.left += 0.5;
            obj.top += 0.5;
           
           
          });
          canvas.renderAll();
          fabric.util.requestAnimFrame(animate);
        })();
      
       var circle=new fabric.Circle({
          left: (Math.random()*((750-1)+1))+1,
          top:(Math.random()*((450-1)+1))+1,
          radius: (Math.random() * 10) + 10,
          fill:"#" + Math.random().toString(10).slice(2, 8)
        });
        
        canvas.add(circle);
     
        
    }
     
     
  }
  
 


 
  
  let obj=new MyCircle();
 
  
 
  
  

  
});
 
 




 

