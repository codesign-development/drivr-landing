import Evalua from './Evalua.html'
import Implementacion from '../Implemetacion'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = Evalua

    const btnImp = divElement.querySelector('.btnImp' )

    btnImp.addEventListener('click', ()=>{
        const implementacion = document.querySelector('#modelo-implementacion')
        implementacion.appendChild(Implementacion())
        implementacion.style.display = 'block'
        implementacion.style.opacity = 1
    })
    
    
    return divElement
}

/* function monstarImp(){
    
} */