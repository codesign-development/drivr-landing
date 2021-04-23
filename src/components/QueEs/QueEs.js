import About from './QuesView.html'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = About

    return divElement
    
}