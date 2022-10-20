
function mostrarHijosNodos(){
    
    let hijos = document.getElementById("contenedor").childNodes;
    let resultado = document.getElementById("idResultado")

    // Colocamos número
    resultado.innerHTML="<br/><br/>el número de elementos es: " + hijos.length +"<br/>";

    hijos.forEach(element => {

        resultado.innerHTML+="<br/>"+element.nodeName; 
    });
}

function mostrarHijosElementos(){
    
    let hijos = document.getElementById("contenedor").children;
    let resultado = document.getElementById("idResultado")

    // Colocamos número
    resultado.innerHTML="<br/><br/>el número de elementos es: " + hijos.length +"<br/>";

    for(let i=0; i < hijos.length; i++ ){

        resultado.innerHTML+="<br/>"+ hijos[i].innerHTML;        
    }


}

function borrarElementos(){

    // Borrar solo el contenido
    document.getElementById("idResultado").innerHTML = ""

    // Borrar toda la etiqueta
    //document.getElementById("idResultado").remove()
}