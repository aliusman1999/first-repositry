import 'fabric/dist/fabric.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { inherits } from 'util';
import { NONAME } from 'dns';



 
 // create a wrapper around native canvas element (with id="c")
 $('#can').click(function(){ 
  $(document).ready(function init(){
 
    canvas.setHeight(500);
    canvas.setWidth(800);
    $('canvas').bind("click",obj.test);
  });
 var canvas = new fabric.Canvas('canvas');
// create a rectangle object
var c1;
var c2;
class Circle1{
  s(l,t,c,f,wi,ra){
    var circle  = new fabric.Circle({
      left: l,
      top: t,
      stroke:c,
      fill:f,
      
      strokeWidth:wi,
      radius:ra,});
      canvas.add(circle);
      
      return circle;
  }
  test(){
    
    c2.set('fill','red');
    console.log("ali");

c1.set('fill','blue');
canvas.add();

  }
}
 let obj=new Circle1();
  c2=obj.s(200,200,'black','green',3,20);
  c1=obj.s(200,100,'black','green',2,20);
 
 



 


 });




 

