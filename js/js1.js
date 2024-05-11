/*Cualquier funcionalidad añadida al curriculum irá aquí*/

document.addEventListener("DOMContentLoaded", function(){
    //Función del botón Imprimir
    var guardarpdf=document.getElementById("guardarpdf");
    guardarpdf.addEventListener("click", function(){
        window.print();
    });

    //Función del botón Subir Arriba

    var arribab=document.getElementById("subirarriba");

    document.addEventListener("scroll", function(){
        var y=window.scrollY;
        if (y>150){
            arribab.style.display="block";
        }
        else{
            arribab.style.display="none";
        }
    })
    arribab.addEventListener("click", function(){
        window.scroll({
            top:0,
            left:0,
            behavior: 'smooth',
        })
    })
})