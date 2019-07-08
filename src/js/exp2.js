import 'fabric/dist/fabric.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


var canvas = new fabric.Canvas('canvas');


    canvas.setHeight(500);
    canvas.setWidth(800);
    canvas.clear();
    canvas.renderAll();
   
    fabric.Image.fromURL('./car.png', function(img) {
        img.scale(0.5);
        
        canvas.add(img);
      console.log(img);
      });
      
    
