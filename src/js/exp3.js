import 'fabric/dist/fabric.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


var canvas = new fabric.Canvas('canvas');

canvas.on('mouse:click', function(event){console.log("index")});
class Car extends fabric.Image{
    constructor(imgElement){
        super(imgElement,{
            left: 380,
            top: 250,
            scaleX: 0.03,
            scaleY: 0.03,
            angle: 1,
            originX: 'center',
        });
        this.oldAngle=0;
        this.Cos=0;
        this.Sin=0;
    }
}

$('#exp3').click(function(){
    console.log("exp3 starting up..");
    canvas.clear();
    var imgElement = document.getElementById('my-img');
    let car = new Car(imgElement);
    let line = new fabric.Line([0,0,0,0],{stroke:'black',hasControls:false,hasBorders:false,});
    
    canvas.add(line);
    canvas.add(car);
    
    
    canvas.on('mouse:up',function(e){
        position(e);
    });
    function position(event){
      var xaxis = event.pointer.x;
      var yaxis = event.pointer.y;
      mouseClick(xaxis,yaxis,car,line);
    }
});

// ----------------------------------calculate lineangle------------------------------------------

function getAngleDeg(perpendicular,base) {
    var result = (perpendicular) / (base);
    var angleRad = Math.atan(result);
    var angleDeg = angleRad * 180 / Math.PI;
    return(angleDeg);
}

function calculation(perpendicular,base){
    var hyportinuous = Math.hypot(perpendicular,base);
    return(hyportinuous);
}

//-------------------------------------for car movement--------------------------------------

function toRadians (angle){
    return angle * (Math.PI / 180);
}

function sinDegree(degrees){
    return Math.round(Math.sin(toRadians(degrees))*1000 )/1000;
}

function cosDegree(degrees){
    return (Math.cos(toRadians(degrees)) *1000 )/1000;
}

//------------------------------when click pressed on canvas---------------------------------

function mouseClick(xaxis,yaxis,car,line){
    line.set({
        x2: xaxis,
        y2: yaxis,
        x1: car.left,
        y1: car.top,
    });
    var perpendicular = ( car.top - yaxis)/2;
    var base = (xaxis - car.left)/2;
    var lLength = calculation(perpendicular,base);
    var lAngle = getAngleDeg(perpendicular,base);
    if(lAngle > car.angle){
        car.angle += 1;
    } 
    if (lAngle < car.angle){
        car.angle -= 1;
    }
    if (Math.abs(perpendicular) > 0){
        car.top -=  1 * car.Cos;
        
    }
    if (Math.abs(base) > 0){
        car.left += 1 * car.Sin ;
       
    }
 
   
    // car angle calculation car

    if(car.angle !== car.oldAngle){
        // If the rotation changed, calculate new angles.
		car.Cos = cosDegree(car.angle);
        car.Sin = sinDegree(car.angle);
    }
    car.oldAngle = car.angle;
    if(car.left > canvas.getWidth()){
        car.left = 0;
    }
	if(car.left < 0){
        car.left = canvas.getWidth()
    }
	if(car.top > canvas.getHeight()){
        car.top = 0;
    }
    if(car.top < 0){
        car.top = canvas.getHeight();
    }
    canvas.renderAll();
    fabric.util.requestAnimFrame(function(){mouseClick(xaxis,yaxis,car,line)});

}