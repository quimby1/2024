const imagenes = [
    "img/afirmaciones/1.png",
    "img/afirmaciones/2.png",
    "img/afirmaciones/3.png",
    "img/afirmaciones/4.png",
    "img/afirmaciones/5.png",
    "img/afirmaciones/6.png",
    "img/afirmaciones/7.png",
    "img/afirmaciones/8.png",
    "img/afirmaciones/9.png",
    "img/afirmaciones/10.png",
    "img/afirmaciones/11.png",
    "img/afirmaciones/12.png",
    "img/afirmaciones/13.png",
    "img/afirmaciones/14.png",
    "img/afirmaciones/15.png",
    "img/afirmaciones/16.png",
    "img/afirmaciones/17.png",
    "img/afirmaciones/18.png",
    "img/afirmaciones/19.png",
    "img/afirmaciones/20.png",
    "img/afirmaciones/21.png",
    "img/afirmaciones/22.png",
    "img/afirmaciones/23.png",
    "img/afirmaciones/24.png",
    "img/afirmaciones/25.png"
]

function cambiarImagen() {
    const contenedorImagen = document.querySelector('.imagen');
    const nuevaImagen = imagenes[Math.floor(Math.random() * imagenes.length)];
    contenedorImagen.src = nuevaImagen;
}