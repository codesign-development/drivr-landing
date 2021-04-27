import * as THREE from './public/js/ThreeJSLib/three.module.js';
import {
  MeshStandardMaterial
} from './public/js/ThreeJSLib/three.module.js';
import {
  OrbitControls
} from './public/js/ThreeJSLib/OrbitControls.js';
import {
  FBXLoader
} from './public/js/ThreeJSLib/FBXLoader.js';

let camera, scene, renderer, stats;

var simulador = {}


init();
animate();

function init() {

  const container = document.createElement('div');
  document.body.appendChild(container);
  container.className = "simulador";

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );

  camera.position.set(100, 200, 300);

  scene = new THREE.Scene();

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, 200, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 200, 100);
  scene.add(dirLight);

  // model

  const loader = new FBXLoader();
  loader.load('./public/fbx/simulador8.fbx', function (object) {

    object.traverse(function (child) {

      if (child.isMesh) {

        child.castShadow = true;
        child.receiveShadow = true;

      }

    });

    object.name = "simulador"
    object.position.set(-30,-40,0)
    object.rotation.set(0,-.2, 0)
    object.scale.set(1, 1, 1)
    window["simulador"] = object
    simulador = object
    scene.add(object);

    let texture = new THREE.TextureLoader().load("./public/fbx/UV_CaseNuevoAlbedo.png");
    simulador.children[5].material[0].map = texture

    function verScroll() {
      let home = document.querySelector('#home')
      let seccionUno = document.querySelector('#que-es')
      let seccionDos = document.querySelector('#que-evalua')
      let seccionTres = document.querySelector('#seguridad-vial')
      let servicios = document.querySelector('#servicios')
      let contact = document.querySelector('#contacto')
      let modelo = document.querySelector('.simulador')

      let actualScroll = window.scrollY
      let inhome = home.getBoundingClientRect().height;
      let inqueEs = seccionUno.getBoundingClientRect().height;
      let inevala = seccionDos.getBoundingClientRect().height;
      let inseg = seccionTres.getBoundingClientRect().height;
      let inserv = servicios.getBoundingClientRect().height;
      let incontact = contact.getBoundingClientRect().height;
      
      function windoResize(){

        let windowWidth = window.innerWidth

        if(windowWidth>=770){

          var tl = new TimelineMax({
            delay: -1
          });
    
          switch (true) {

            case (actualScroll < inhome):
              modelo.style.opacity = 0
              tl.to(simulador.rotation, 3, { ease: Power3.easeInOut, y: -.2 }, "=1")
              tl.to(simulador.position, 2, { ease: Power3.easeInOut, x:-15,y:-40,z:-30}, "-1")
              break;
            case (actualScroll-200 < inqueEs):
              modelo.style.opacity = 1
              tl.to(simulador.rotation, 3, {ease: Power3.easeInOut, y: -7 }, "=1")
              break;
            case (actualScroll < inevala + inqueEs):
              modelo.style.opacity = 1
              tl.to(simulador.rotation, 3, {ease: Power3.easeInOut, y: -8.3 }, "=1")
              tl.to(simulador.position, 3, { ease: Power3.easeInOut, x:-5,y:-45,z:-30}, "1")
              break;
            case (actualScroll < inevala + inqueEs + inseg):
              modelo.style.opacity = 0
              break;
           case (actualScroll < inevala + inqueEs + inseg + inserv):
              modelo.style.opacity = 0
              break;
            case (actualScroll < inevala + inqueEs + inseg + inserv + incontact):
              modelo.style.opacity = 0
              break;
            
            default:
              break;
          }

        }
       
        if(windowWidth<=768){

          simulador.scale.set(.55,.55,.55)

          var tl2 = new TimelineMax({
            delay: -1
          });
    
          switch (true) {
            case (actualScroll < inhome):
              modelo.style.opacity = 0
              tl2.to(simulador.rotation, 3, { ease: Power3.easeInOut, y: -.7 }, "=1")
              tl2.to(simulador.position, 2, { ease: Power3.easeInOut, x:10,y:-30,z:10}, "-1")
              break;
            case (actualScroll-200 < inqueEs):
              modelo.style.opacity = 1
              tl2.to(simulador.rotation, 3, {ease: Power3.easeInOut, y: -7 }, "=1")
              tl2.to(simulador.position, 3, { ease: Power3.easeInOut, x:-20,y:-30,z:10}, "1")
              break;
            case (actualScroll < inevala + inqueEs):
              modelo.style.opacity = 1
              tl2.to(simulador.rotation, 3, {ease: Power3.easeInOut, y: -8.3 }, "=1")
              tl2.to(simulador.position, 3, { ease: Power3.easeInOut, x:15,y:-45,z:0}, "1")
              break;
            case (actualScroll < inevala + inqueEs + inseg):
              modelo.style.opacity = 0
              break;
           case (actualScroll < inevala + inqueEs + inseg + inserv):
              modelo.style.opacity = 0
              break;
            case (actualScroll < inevala + inqueEs + inseg + inserv + incontact):
              modelo.style.opacity = 0
              break;
            
            default:
              break;
          }

        }

        if(windowWidth<=426){

          simulador.scale.set(.4,.4,.4)

          var tl3 = new TimelineMax({
            delay: -1
          });
    
          switch (true) {

            case (actualScroll < inhome):
              modelo.style.opacity = 0
              tl3.to(simulador.rotation, 3, { ease: Power3.easeInOut, y: -.7 }, "=1")
              tl3.to(simulador.position, 3, { ease: Power3.easeInOut, x:-10,y:-30,z:10}, "1")
              break;
            case (actualScroll-200 < inqueEs):
              modelo.style.opacity = 1
              tl3.to(simulador.rotation, 3, {ease: Power3.easeInOut, y: -7 }, "=1")
              tl3.to(simulador.position, 3, { ease: Power3.easeInOut, x:-10,y:-30,z:10}, "1")
              break;
            case (actualScroll < inevala + inqueEs):
              modelo.style.opacity = 1
              tl3.to(simulador.rotation, 3, {ease: Power3.easeInOut, y: -8.3 }, "=1")
              tl3.to(simulador.position, 3, { ease: Power3.easeInOut, x:15,y:-45,z:0}, "1")
              break;
            case (actualScroll < inevala + inqueEs + inseg):
              modelo.style.opacity = 0
              break;
           case (actualScroll < inevala + inqueEs + inseg + inserv):
              modelo.style.opacity = 0
              break;
            case (actualScroll < inevala + inqueEs + inseg + inserv + incontact):
              modelo.style.opacity = 0
              break;
            
            default:
              break;
          }
        }
      }
      windoResize();
      window.addEventListener('resize', windoResize);
    }

    window.addEventListener('scroll', verScroll)



  });

  renderer = new THREE.WebGLRenderer({
    alpha: true
  });

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0,0,0);
  controls.enableZoom = false
  controls.enablePan = false
  controls.enableRotate = false
  controls.update();

  window.addEventListener('resize', onWindowResize);



}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  
}

//

function animate() {

  requestAnimationFrame(animate);

  renderer.render(scene, camera);

}
