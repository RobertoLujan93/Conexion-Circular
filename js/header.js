//Mostrar/ocultar texto header al hacer click en botón

const headerDom = document.querySelector (".banner__texto")
const headerBtn = document.querySelector (".navbar-toggler")

const toggleTexto = () => {
    headerDom.classList.toggle ("d-none")
}

headerBtn.onclick = toggleTexto