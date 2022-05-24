let amsjwsp = document.getElementById("WSP");
console.log(amsjwsp);


function mensajewsp(){
  let nombre = document.getElementById("nombreform");
  let mail = document.getElementById("mailform");
  let telefono = document.getElementById("telefonoform");
  let motivo = document.getElementById("motivoform");
  let mensajeform = document.getElementById("mensajeform");

  console.log(nombre);

  let mensajefinal = `Nombre: ${nombre.value}\nEmail: ${mail.value}\nTelefono: ${telefono.value}\nMotivo: ${motivo.value}\nMensaje: ${mensajeform.value}`;
  

  let mensaje
  mensaje = "https://api.whatsapp.com/send/?phone=3743411783&text=" + mensajefinal 
  amsjwsp.href = mensaje  
};

amsjwsp.addEventListener("click", mensajewsp);


