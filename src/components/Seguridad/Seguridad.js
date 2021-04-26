import Seguridad from './SeguridadView.html'
import Desarrollo from '../Desarrollo'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = Seguridad

    const btnObj = divElement.querySelector('.btnObjetivos')
    const desarrollo = document.querySelector('#desarrollo')


    btnObj.addEventListener('click', () => {
        desarrollo.appendChild(Desarrollo())
        desarrollo.style.display = 'block'
        desarrollo.style.opacity = 1
    })

    return divElement
    
}