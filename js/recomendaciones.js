const podcast = document.querySelector(".podcast")
const libros = document.querySelector(".libros")
const lugares = document.querySelector(".lugares")
const ig = document.querySelector(".ig")
const series = document.querySelector(".series")


podcast.addEventListener("click",() =>{
    window.location.href = "spoty.html";
})

libros.addEventListener("click",() =>{
    window.location.href = "libros.html";
})

lugares.addEventListener("click",() =>{
    window.location.href = "lugares.html";
})

ig.addEventListener("click",() =>{
    window.location.href = "ig.html";
})

series.addEventListener("click",() =>{
    window.location.href = "series.html";
})