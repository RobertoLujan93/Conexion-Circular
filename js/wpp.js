// levanto el a del link de whatssap 

const a_msj_wsp = document.getElementById('WSP');
console.log(a_msj_wsp);

//  <a id="WSP" href="">Enviar Mensaje por Whatsapp</a>



function mensaje_wsp(){
  //<input id="nombreform" type="text" name="name" class="form-control" id="name" placeholder="Nombre" value="Nombre" required>
  let nombre = document.getElementById("nombreform")
  let mail = document.getElementById("mailform")
  let motivo = document.getElementById("motivoform")
  let mensajeform = document.getElementById("mensajeform")

  console.log(nombre);

  //console.log(nombre.value)

  let mensaje_final
  mensaje_final ="Hola!,%20Mi%20Nombre%20es:%20" + nombre.value +",%20" 
  mensaje_final =  mensaje_final + "%20Mi%20Mail%20es:%20" + mail.value
  mensaje_final = mensaje_final + ",%20El%20Motivo%20de%20mi%20contacto%20es%20" + motivo.value + ",%20"
  mensaje_final = mensaje_final + "%20mensaje%20:%20" + mensajeform.value

  var mensaje
  mensaje = "https://api.whatsapp.com/send/?phone=3743411783&text=" + mensaje_final 
  //Esto%20es%20una%20prueba
  a_msj_wsp.href = mensaje  
}

a_msj_wsp.addEventListener('click', mensaje_wsp)


