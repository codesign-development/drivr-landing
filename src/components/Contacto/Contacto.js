import ContactoView from './ContactoView.html'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = ContactoView

    return divElement
}