// let amsjwsp = document.querySelector("#WSP");
// console.log(amsjwsp);


// function mensajewsp(){
//   let nombre = document.getElementById("nombreform");
//   let mail = document.getElementById("mailform");
//   let telefono = document.getElementById("telefonoform");
//   let motivo = document.getElementById("motivoform");
//   let mensajeform = document.getElementById("mensajeform");

//   console.log(nombre);

//   let mensajefinal = `Nombre: ${nombre.value}\nEmail: ${mail.value}\nTelefono: ${telefono.value}\nMotivo: ${motivo.value}\nMensaje: ${mensajeform.value}`;
  

//   let mensaje
//   mensaje = "https://wa.me/3743411783?text=" + mensajefinal 
//   amsjwsp.href = mensaje  
// };

// amsjwsp.addEventListener("click", ()=>{
//   mensajewsp()
// });

const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombre').value;
        let mail = document.getElementById('mail').value;
        // let telefono = document.getElementById('telefono').value;
        let asunto = document.getElementById('asunto').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 3743411783;
var win= window.open(`https://wa.me/${numero}?text=Nombre=%20${nombre}%20Correo=%20${mail}%20Asunto=%20${asunto}%20Mensaje=%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)