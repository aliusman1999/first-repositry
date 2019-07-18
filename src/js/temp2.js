if(lAngle > this.angle){
  this.angle += 1;
} 
if (lAngle < this.angle){
  this.angle -= 1;
}
if(this.angle !== this.oldAngle){
// If the rotation changed, calculate new angles.
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
this.top -=  1 * this.Cos;
this.left += 1 * this.Sin ;