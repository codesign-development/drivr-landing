import beneficiosView from './Beneficios.html'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = beneficiosView

    const arrow = divElement.querySelector('.arrowBackBen')
    const beneficios = document.querySelector('#beneficios')
    const implementacion = document.querySelector('#modelo-implementacion')

    console.log(beneficios);
    arrow.addEventListener('click', ()=>{
        beneficios.removeChild(beneficios.firstChild)
        beneficios.style.display = 'none'
        beneficios.style.opacity = 0
        implementacion.removeChild(implementacion.firstChild)
        implementacion.style.display = 'none'
        implementacion.style.opacity = 0
    })

    return divElement
}