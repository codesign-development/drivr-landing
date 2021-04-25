import Implementacion from './Implementacion.html'
import Beneficios from '../Beneficios'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = Implementacion   

    const arrow = divElement.querySelector('.arrowBack')
    const verBen = divElement.querySelector('.cardImp__txt__btnBen')
    const implementacion = document.querySelector('#modelo-implementacion')
    const beneficios = document.querySelector('#beneficios')

    verBen.addEventListener('click', ()=>{
        implementacion.removeChild(implementacion.firstChild)
        implementacion.style.display = 'none'
        implementacion.style.opacity = 0
        beneficios.appendChild(Beneficios())
        beneficios.style.display = 'block'
        beneficios.style.opacity = 1
    })
    
    arrow.addEventListener('click', ()=>{
        implementacion.removeChild(implementacion.firstChild)
        implementacion.style.display = 'none'
        implementacion.style.opacity = 0
    })
    return divElement
}