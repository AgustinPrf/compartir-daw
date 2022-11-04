
const elementos = new Set();

cargarElementos()

function anadirElemento() {
    // Comprobar elemento repetido o vacrío
    let articulo = document.querySelector("#articulo");    
  
    if(articulo.value=="" || elementos.has(articulo.value)){
       alert(`Error, elemento incorrecto`)
       articulo.value=""
       articulo.focus()
       return false 
    }

    // Creamos el nodo de la lista    
    let lista = document.querySelector("#lista");
    let items = document.getElementsByTagName("li");

    item = document.createElement("li");
    item.innerHTML=articulo.value;    
    item.setAttribute("onClick", "borrar(this)");

    

    let insertado=false
    // Buscar e inserta en posiciones intermedias
    for ( let li of items) {
        result = articulo.value.localeCompare(li.innerHTML)
        
        if ( !insertado && articulo.value.localeCompare(li.innerHTML) < 0) {
            //console.log(`${articulo.value} - ${li.innerHTML} - ${result}`)
            lista.insertBefore(item, li);
            insertado=true            
        } 
    }
    // Buscar e insert en posición final
    if(insertado===false){
        lista.appendChild(item)
    }

    //Actualizo la lista de elementos
    elementos.add(item.innerHTML)
    articulo.value=""
    articulo.focus()
}

function cargarElementos(){
    let items = document.querySelectorAll("#lista li");

    items.forEach( e => elementos.add(e.innerHTML) )    
}

function borrar(elemento){
    elementos.delete(elemento.innerHTML)
    elemento.remove();    

}