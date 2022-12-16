var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener("click",mostrarInformacion)


function mostrarInformacion(e){
    let valornombre = "agustin"
    console.log(`Nombre : %c${valornombre}`,color_css);
    /*
    console.clear()
    console.log(`Usando this : %c${this.value}`,color_css);
    console.log(`Usando Event : %c${e.target.value}`,color_css);
    
    
    e.preventDefault( );*/
}


