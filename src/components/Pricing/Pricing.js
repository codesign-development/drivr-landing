import Pricing from './PricingView.html'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = Pricing

    return divElement
}