var link = document.getElementById('downloadLink');
var cantidadSpan = document.getElementById('cantidad');

var arbolesRestantes = 5;

link.addEventListener('click', function(event){
    console.log("buenos días estrellitas");
    arbolesRestantes--;

    cantidadSpan.innerText = arbolesRestantes;

    if(arbolesRestantes === 0){
        event.preventDefault();
        link.style.display = "none";
        alert("no hay existencias");
    }
});

