import 'fabric/dist/fabric.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Glober 
var canvas = new fabric.Canvas('canvas');
// Modules
const circleModule = require('/js/exp1.js');
const carModule = require('/js/exp2.js');
const clickModule = require('/js/exp3.js');
const cubeModule = require('/js/cube.js');

// to print console data
if (typeof console  != "undefined") 
 if (typeof console.log != 'undefined')
   console.olog = console.log;
 else
 console.olog = function() {};
 console.error = console.debug = console.info =  console.log
 console.log = function(message) {
   console.olog(message);
   $('#debugDiv').append( '<p>'+ message + '<p>' );
  };

//for circle
$('#exp1').click(function(){
  console.log('exp1 button pressed')
  circleModule.exp1(canvas);
});
//for car
$('#exp2').click(function(){
  console.log('exp2 button pressed')
  carModule.exp2(canvas);
});
//for click driving
$('#exp3').click(function(){
  console.log('exp3 button pressed')
  clickModule.exp3(canvas);
  
});
// for cube
$('#cube').click(function(){
  console.log('cube button pressed')
  cubeModule.cube();  
});
// canvas resize
// window.addEventListener('resize', resizeCanvas, false);

// resizeCanvas();    /// call the first time page is loaded

// function resizeCanvas() {
//     canvas.setWidth($('#container').innerWidth())  ;
//     canvas.setHeight($('#container').innerHeight()) ;
//     console.log($('#container').innerHeight());
//}