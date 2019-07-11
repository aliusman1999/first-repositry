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
    let circle = new fabric.Circle({
        radius: 0,
        startAngle: 0,
        endAngle: Math.PI,
        stroke: 'black',
        fill: '',
    });
    canvas.add(line);
    canvas.add(car);
    canvas.add(circle);
    
    canvas.on('mouse:up',function(e){
        position(e);
    });
    function position(event){
      var xaxis = event.pointer.x;
      var yaxis = event.pointer.y;
      mouseClick(xaxis,yaxis,car,line,circle);
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

function mouseClick(xaxis,yaxis,car,line,circle){
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
    car.animate('angle',lAngle,{ onChange: canvas.renderAll.bind(canvas) })
}