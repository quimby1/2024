window.onload = function(){
    let titulo = document.querySelector(".tituloInicio")
    setTimeout(function() {
        titulo.style.opacity = '0';
    }, 3000);


    function miFuncion() {
        titulo.style.display = 'none';
    }
    
    setTimeout(miFuncion, 4000); 
}


let boton = document.querySelector(".boton")
boton.addEventListener("click", ()=>{
    window.location.href = "inicio.html";
})