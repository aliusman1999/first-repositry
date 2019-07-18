import 'fabric/dist/fabric.js';
import $ from 'jquery';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
var canvas = new fabric.Canvas('canvas');
const circleModule = require('/js/exp1.js');
const carModule = require('/js/exp2.js');
const clickModule = require('/js/exp3.js');
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