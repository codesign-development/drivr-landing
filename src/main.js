import '../src/scss/main.scss'
import Header from '../src/components/Header'

const nav = document.querySelector('#containerNav')

window.onload = function() {
  nav.appendChild(Header())
};