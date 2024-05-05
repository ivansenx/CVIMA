/*Cualquier funcionalidad añadida al curriculum irá aquí*/


$(document).ready(function(){
    //Botón imprimir
    $("#guardarpdf").click(function(){
        window.print()
    });

    //Fade del botón para subir arriba
    
    var arribab=$("#subirarriba");
    $(document).scroll(function(){
        var y=$(this).scrollTop();
        if (y>150){
            arribab.fadeIn();
        }
        else{
            arribab.fadeOut();
        }
    })

    arribab.click(function(){
        window.scroll({
            top:0,
            left:0,
            behavior:'smooth',
        })
    })
})