import HeaderView from './HeaderView.html'
/* import Logo from '../../components/Header/Logo' */

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = HeaderView

    return divElement
}