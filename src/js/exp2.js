

class Car extends fabric.Image{
    constructor(imgElement){
        super(imgElement,{
            left: 380,
            top: 428,
            scaleX: 0.03,
            scaleY: 0.03,
            originX: 'center',
            originY: 'center',
        });
        this.topSpeed = 20;
        this.acceleration = 0.15;
        this.friction = 0.5;
        this.breakFriction = 1;
        this.keysDown = [0,0,0,0];
        this.speed = 0;
        this.oldAngle=0;
        this.Cos=1;
        this.Sin=0;
    }
    check(canvas){
        if(this.keysDown[1]){
            // If the up key is down.
            this.speed += this.acceleration;
            this.top -= this.speed * this.Cos;
            this.left += this.speed * this.Sin;
            if(this.speed > this.topSpeed){
                this.speed = this.topSpeed;
            }
        }
        else{
            this.speed -= (this.keysDown[3]) ? this.breakFriction : this.friction;
            if(this.speed < 0){
                this.speed = 0;
            }
            this.top -= this.speed * this.Cos;
            this.left += this.speed * this.Sin;
        }    
        if(this.keysDown[0] && this.speed != 0 ){
            // If the left key is pressed.
            this.angle -= 1 
        }
        if(this.keysDown[2] && this.speed != 0 ){
            // If the right key is pressed.
            this.angle += 1 
        }
        if(this.angle !== this.oldAngle){
            // If the rotation changed, calculate new speeds.
            this.Cos = Math.round(Math.cos(this.angle * (Math.PI / 180)) *1000 )/1000;
            this.Sin = Math.round(Math.sin(this.angle * (Math.PI / 180))*1000 )/1000;
        }
        this.oldAngle = this.angle;
        if(this.left > canvas.getWidth()){
            this.left = 0;
        }
        if(this.left < 0){
            this.left = canvas.getWidth()
        }
        if(this.top > canvas.getHeight()){
            this.top = 0;
        }
        if(this.top < 0){
            this.top = canvas.getHeight();
        }
        var checkSpeed = this.speed;
    }
}


function init(canvas){
    console.log("starting exp2...");
    canvas.clear();
    var imgElement = document.getElementById('my-img');
    let car=new Car(imgElement);
    canvas.add(car);
 update(car,canvas);
}

function update(car,canvas){
    document.onkeydown = function(e){
        var keyCode = e.keyCode - 37; 
        car.keysDown[keyCode] = 1;
    }
    document.onkeyup = function(e){
        var keyCode = e.keyCode - 37;
        car.keysDown[keyCode] = 0;
    }
    car.check(canvas);
    canvas.renderAll();
    fabric.util.requestAnimFrame(function(){ update(car,canvas)});
}

module.exports = {
exp2: function(canvas){
    init(canvas);
}
}