import 'fabric/dist/fabric.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



class Car extends fabric.Image{
    constructor(imgElement){
        super(imgElement,{
            left: 380,
            top: 428,
            scaleX: 0.03,
            scaleY: 0.03,
            angle: 1,
        });
        this.topSpeed = 20;
        this.acceleration = 0.15;
        this.friction = 0.5;
        this.breakFriction = 1;
        this.keysDown = [0,0,0,0];
        this.speed = 0;
        this.oldRotation=0;
        this.oldCos=0;
        this.oldSin=0;
    }
}

var canvas = new fabric.Canvas('canvas');

$('#car').click(function(){
    canvas.setHeight(500);
    canvas.setWidth(800);
    canvas.clear();
    var imgElement = document.getElementById('my-img');
    let car=new Car(imgElement);
    canvas.add(car);
    first(car);
});

function toRadians (angle){
    return angle * (Math.PI / 180);
}

function sinDegree(degrees){
    return Math.round(Math.sin(toRadians(degrees))*1000 )/1000;
}

function cosDegree(degrees){
    return Math.round(Math.cos(toRadians(degrees)) *1000 )/1000;
}

function first(car){
    document.onkeydown = function(e){
        var keyCode = e.keyCode - 37;
        car.keysDown[keyCode] = 1;
    }
    document.onkeyup = function(e){
        var keyCode = e.keyCode - 37;
        car.keysDown[keyCode] = 0;
    }
    if(car.keysDown[1]){
		// If the up key is down.
        car.speed += car.acceleration;
        car.top -= car.speed * car.oldCos;
        car.left += car.speed * car.oldSin;
		if(car.speed > car.topSpeed){
			car.speed = car.topSpeed;
		}
    }
	else{
	    car.speed -= (car.keysDown[3]) ? car.breakFriction : car.friction;
    	if(car.speed < 0){
			car.speed = 0;
        }
        car.top -= car.speed * car.oldCos;
        car.left += car.speed * car.oldSin;
    }
    //--------------------------------------working on angle------------------------------------------------
    if(car.angle !== car.oldRotation){
	    // If the rotation changed, calculate new speeds.
		car.oldCos = cosDegree(car.angle);
		car.oldSin = sinDegree(car.angle);
    }
    car.oldRotation = car.angle;
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
    var checkSpeed = car.speed;
	if(car.keysDown[0] && checkSpeed != 0){
		// If the left key is pressed.
		car.angle -= 1 
    }
	if(car.keysDown[2] && checkSpeed != 0){
		// If the right key is pressed.
		car.angle += 1 
    }
    canvas.renderAll();
    fabric.util.requestAnimFrame(function(){first(car)});
}