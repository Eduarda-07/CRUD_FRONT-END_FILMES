
async function buscar(){
    const titulo = document.getElementById('titulo')
    titulo.style.display = "none"
}
function entrarMenu(){
    const menuOculto = document.getElementById('menuOculto')
    const principal =  document.getElementById("principalInicial")

    menuOculto.style.display="block"
    
}
function sairMenu(){
    const menuOculto = document.getElementById('menuOculto')
    const principal =  document.getElementById("principalInicial")

    menuOculto.style.display="none"
    principal.style.width = "100%"
}
document.getElementById('lupa')
    .addEventListener('click', buscar)