import Pricing from './PricingView.html'
/* import Logo from '../../components/Header/Logo' */

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = Pricing

    return divElement
}