import ContactoView from './ContactoView.html'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = ContactoView
    const data = new FormData(divElement.querySelector('#formulario'))
    const form = divElement.querySelectorAll('#formulario')
    const btnEnviar = divElement.querySelector('#enviar')
    const nombre = divElement.querySelector('#nombre')
    const email = divElement.querySelector('#email')
    const telefono = divElement.querySelector('#tel')
    const empresa = divElement.querySelector('#empresa')
    const coment = divElement.querySelector('#coment')
    evenListener ()
    function evenListener (){
        iniciarForm()
        nombre.addEventListener('blur', validarForm);
        email.addEventListener('blur', validarForm);
        telefono.addEventListener('blur', validarForm);
        empresa.addEventListener('blur', validarForm);
        coment.addEventListener('blur', validarForm);
        console.log(form)
        btnEnviar.addEventListener('submit', enviarFormulario);
    }

    function validarForm (e){
        if(e.target.value.length > 0){
          console.log('si hay lgo');
          e.target.style.borderBottomColor = 'green'
        } else {
            e.target.style.borderBottomColor = 'red'
            e.target.placeholder = 'Todos los cambpo son obligatorios'
        }

        if(e.target.type === 'email'){
            const resultado = e.target.value.indexOf('@')
            if(resultado < 0){
                e.target.style.borderBottomColor = 'red'
                e.target.placeholder = 'email inválido'
            } else {
                e.target.style.borderBottomColor = 'green'
            }
        }

        if(nombre.value !== '' &&email.value !== '' &&telefono.value !== '' &&empresa.value !== '' &&coment.value !== '' ){
            btnEnviar.disabled = false
            btnEnviar.style.opacity = 1
        }else{
            console.log('falta validar')
        }
    }

    function iniciarForm(){
        btnEnviar.disabled = true
        btnEnviar.style.opacity = .5
    }

    async function enviarFormulario (e) {
        e.preventDefault()
        const url ='http://3.15.172.155:3333/send-email-contacto-drivr'
        try{
            await fetch(url, {
                method: 'POST',
                body: data
            })
            console.log('se mando info')
            window.reload
        } catch(error){
            console.log(error)
        }

    }
    return divElement
}




   