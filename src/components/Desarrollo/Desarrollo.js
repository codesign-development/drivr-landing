import Desarrollo from './Desarollo.html'

export default () => {

    const divElement = document.createElement('div')
    divElement.innerHTML = Desarrollo

    const arrow = divElement.querySelector('.arrowBackDes')
    const des = document.querySelector('#desarrollo')
    console.log(des);

    arrow.addEventListener('click', () => {
        des.removeChild(des.firstChild)
        des.style.display = 'none'
        des.style.opacity = 0
    })

    return divElement
}