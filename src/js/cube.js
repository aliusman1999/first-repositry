import $ from 'jquery';
import * as THREE from "three";
import "three-orbitcontrols/OrbitControls"



function init(canvas){
  scene1(canvas);
}

function scene1(canvas){  
  var canvaselm = $('#canvas');
  // Scene and Camera
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight);
  camera.position.z = 7;
  camera.position.y = 0;
  camera.rotation.x= 0;
  
  // Rendering
  var renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth/2,window.innerHeight/2);
  renderer.shadowMap.enabled = true;
  $('#container').append(renderer.domElement);
  

  var controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Box
  var geometry = new THREE.BoxGeometry( 2, 2, 2 );
  var texture = new THREE.MeshPhongMaterial({color: '#8AC'});
  //var cubeMaterial = new THREE.MeshLambertMaterial({map: texture });
  //cubeMaterial.side = THREE.DoubleSide;
  var cube = new THREE.Mesh( geometry, texture );
  cube.receiveShadow = false;
  cube.castShadow= true;
  cube.position.y=1.2;
  cube.rotation.x = -12;
  cube.rotation.y = -0.8;
  scene.add( cube );

  // Floor
  var geometry = new THREE.PlaneGeometry( 10, 5, 5 );
  var texture1 = new THREE.TextureLoader().load('/floor.7cfc4d6f.jpg');
  var material = new THREE.MeshLambertMaterial( {map: texture1});
  material.side = THREE.DoubleSide;
  var plane = new THREE.Mesh( geometry, material );
  plane.receiveShadow = true;
  plane.rotation.x = -1;
  plane.position.y=0;
  scene.add( plane );

  // Light
  var light = new THREE.AmbientLight(0xFFfFFf, 0.2);
  light.position.x = -10;
  light.position.y = -10;
  scene.add(light);

  // Spot Light 
  var directionalLight = new THREE.DirectionalLight( 0xffffff,1.5);
  directionalLight.position.set( 1, 0.5, 0.5).normalize();
  directionalLight.castShadow = true;
  directionalLight.shadowDarkness = 0.5;
  directionalLight.shadowCameraVisible = true;
  scene.add( directionalLight );
 
  // To Control Scene With Window Size
  window.addEventListener('resize', function(){
    var height = this.window.innerHeight/2;
    var width = this.window.innerWidth/2;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
  });
  
  // To Display
  function animate() {
	  requestAnimationFrame( animate );
	 	    
    renderer.render( scene, camera );
	};  
requestAnimationFrame(animate);
}

module.exports = {
  cube: function(canvas){
    
      init(canvas);
  },

  }