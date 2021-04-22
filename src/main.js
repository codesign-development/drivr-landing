import '../src/scss/main.scss'
import Header from './components/Header'
import Pricing from './components/Pricing';


const nav = document.querySelector('#containerNav')
const servicios = document.querySelector('#servicios')

window.onload = function () {
  nav.appendChild(Header())
  servicios.appendChild(Pricing())
};

particlesJS("particles-js", {"particles":{"number":{"value":168,"density":{"enable":true,"value_area":4486.748069095924}},"color":{"value":"#f6871f"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":8},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":272.40970419510967,"color":"#ffffff","opacity":0.35253020542896546,"width":0},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; 
update = function() { stats.begin(); stats.end();  requestAnimationFrame(update); }; 
requestAnimationFrame(update);;