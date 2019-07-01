



import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


// planning area
$(document).ready();


// working functions



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
console.log("hello in")


//for 2d menu
$('#sty').click(function(){
  $('#D3').css("width", "0");
  $('#D2').css("width", "160px");
});
// for 3d menu
$('#for_3d').click(function() {
  $('#D2').css("width" , "0");
  $('#D3').css("width", "160px");
});
// close 2d menu
$('#closeD2').click(function() {
  $('#D2').css("width", "0");
});
// close 3d menu
$('#closeD3').click(function() {
  $('#D3').css("width", "0");
});
// for canvas




     
     

