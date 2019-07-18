import 'fabric/dist/fabric.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


var canvas = new fabric.Canvas('canvas');

class Car extends fabric.Image{
    constructor(imgElement){
        super(imgElement,{
            left: 380,
            top: 250,
            scaleX: 0.03,
            scaleY: 0.03,
            originX: 'center',
            originY: 'center',
            
        });
        this.oldAngle=0;
        this.Cos=1;
        this.Sin=0;
    }
    check(lAngle,xaxis,yaxis,canvas){
       
        
    }
}

function init(canvas){
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
    function position(e){
      var xaxis = e.pointer.x;
      var yaxis = e.pointer.y;
      update(xaxis,yaxis,car,line,canvas);
    }
}

function getAngleDeg(perpendicular,base) {
    var result = (perpendicular) / (base);
    var angleRad = Math.atan(result);
    var angleDeg = angleRad * 180 / Math.PI;
    return(angleDeg);
}

function update(xaxis,yaxis,car,line,canvas){
    line.set({
        x2: xaxis,
        y2: yaxis,
        x1: car.left,
        y1: car.top,
    });
    var perpendicular = ( car.top - yaxis);
    var base = (xaxis - car.left);
    var lAngle = getAngleDeg(perpendicular,base);
    car.animate('angle',lAngle > 0 ? (90-lAngle) : (-90-lAngle) , {
        duration:2000,
        onChange: canvas.renderAll.bind(canvas),
        onComplete: function(){
            car.animate( 'top',yaxis, {
                duration: 2000,
                onChange: canvas.renderAll.bind(canvas)
            });
            car.animate( 'left',xaxis, {
                duration: 2000,
                onChange: canvas.renderAll.bind(canvas),
                onComplete: function(){
                    car.animate('angle',0 , {
                        duration:2000,
                        onChange: canvas.renderAll.bind(canvas),}) 
                }
            });

        }
    });
    
   
   car.check(lAngle,xaxis,yaxis,canvas);
    
    

}
module.exports = {
    exp3: function(canvas){
        init(canvas);
    },
 
    }