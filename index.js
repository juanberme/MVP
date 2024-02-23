/*document.addEventListener('DOMContentLoaded', function() {
    var downloadBtn = document.querySelectorAll('.downloadBtn'); // Corrección en las comillas
    var arbolesRestantes = 4;

    downloadBtn.forEach(function(boton){
        boton.addEventListener('click', function(){
            console.log("hola");
            arbolesRestantes--;

            var parrafo = boton.parentNode.querySelector('.cantidadArboles'); 
            parrafo.innerText = 'Hola, quedan '+arbolesRestantes+ ' árboles para descargar'; // Acentué "árbol"

            if(arbolesRestantes === 0){
                boton.disabled = true;
            }
        });
    });
});*/

var downloadBtn = document.querySelectorAll('.downloadBtn'); // Corrección en las comillas

var arbolesRestantes = 5;

downloadBtn.forEach(function(boton){
    boton.addEventListener('click', function(){
        console.log("hola");
        arbolesRestantes--;

        var parrafo = document.querySelector('.cantidadArboles'); 
        parrafo.innerText = 'Hola, quedan '+arbolesRestantes+ ' arboles para descargar';

        if(arbolesRestantes === 0){
            boton.disabled = true;
            alert("Ya no hay existencias");
        }
        
    })
}); 

/*downloadBtn.addEventListener("click", function(){
    console.log("aqui estoy");
});*/
