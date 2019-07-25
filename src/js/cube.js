import $ from 'jquery';
import * as THREE from "three";
import "three-orbitcontrols/OrbitControls";

function init(){
  scene1();
  // global
  // cuteRoationSpeed = 2;
  // cubteRotationEnable = false;
}

function scene1(){  
  var canvas_model = document.getElementById('container')

  // raycaster and vector
  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();

  // Scene and Camera
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, 920/500,1,5000);
  camera.position.z = 7;
  camera.position.y = 3;
 
  // Rendering
  var renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(920,500);
  renderer.shadowMap.enabled = true;
  canvas_model.removeChild(canvas_model.childNodes[0]);
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
  cube.position.y=1;
  cube.rotation.x = 0;
  cube.rotation.y = -0.5;
  scene.add( cube );
  
  // Floor
  var geometry = new THREE.PlaneGeometry( 5, 5, 5 );
  var texture1 = new THREE.TextureLoader().load('/floor.7cfc4d6f.jpg');
  var material = new THREE.MeshLambertMaterial( {map: texture1});
  material.side = THREE.DoubleSide;
  var plane = new THREE.Mesh( geometry, material );
  plane.receiveShadow = true;
  plane.rotation.x = -1.55 ;
  plane.position.y=0;
  scene.add( plane );

  // Light
  var light = new THREE.AmbientLight(0xFFfFFf, 0.2);
  light.position.x = -10;
  light.position.y = -10;
  scene.add(light);
  light.addEventListener()

  // Spot Light 
  var directionalLight = new THREE.DirectionalLight( 0xffffff,1.5);
  directionalLight.position.set( 1, 0.5, 0.5).normalize();
  directionalLight.castShadow = true;
  scene.add( directionalLight );

  // To Control Scene With Window Size
  window.addEventListener('resize', function(){
    var height = 500;
    var width = 920;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
  });

  // for box click
  var rect = renderer.domElement.getBoundingClientRect();
  console.log(rect)
  function onMouseMove( event ) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    
    mouse.x = ( ( event.clientX - rect.left ) / (( rect.width - rect.left )/0.65) ) * 2 - 1;
    mouse.y = - ( ( event.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;
    raycaster.setFromCamera( mouse.clone(), camera );
  }



  // To Display
  function animate() {
    
    var intersects = raycaster.intersectObjects( scene.children,true);
   
    for ( var i = 0; i < intersects.length; i++ ) {
      
      cube.rotation.y += 0.01;
      //intersects[ i ].object.material.color.set( 0xff0000 );
  
    }
	  requestAnimationFrame( animate );
    renderer.render( scene, camera );
  };  
  canvas_model.addEventListener('mousemove', onMouseMove , false);
  requestAnimationFrame(animate);

}


module.exports = {
  cube: function(){  
      init();
  },

  }