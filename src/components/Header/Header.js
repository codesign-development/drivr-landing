import HeaderView from './HeaderView.html'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = HeaderView

    return divElement
}