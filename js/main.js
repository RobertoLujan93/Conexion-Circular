
const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombre').value;
        let mail = document.getElementById('mail').value;
        let asunto = document.getElementById('asunto').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= +5493518639416;
var win= window.open(`https://wa.me/${numero}?text=Nombre=%20${nombre}%20Correo=%20${mail}%20Asunto=%20${asunto}%20Mensaje=%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)