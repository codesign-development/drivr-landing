import './main.scss'
import anime from 'animejs/lib/anime.es'

anime({
    targets: '.svgShield',
    opacity: 0,
    easing: 'easeInOutQuad',
    delay: 4000
  });
  
anime({
    targets: '.logoShield, .logoLetras, .textRemo',
    opacity: 1,
    easing: 'easeInOutQuad',
    delay: 4000
  });

  anime({
    targets: '.back',
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 2000,
    delay: 4500
  });
