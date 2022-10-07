let busqueda = document.getElementById("busqueda").value;
let texto = document.getElementById("texto").innerHTML;
function buscar(){
    if(document.getElementById("mayuscula").checked){
        texto = texto.toLowerCase();
        busqueda = busqueda.toLowerCase();
        if(texto.includes(busqueda)){
            alert("La palabra buscada en mayusculas se encuentra en el texto");
            console.log(busqueda)
            console.log(texto)
        }
    }
    else if(texto.includes(busqueda)){
        alert("La palabra buscada se encuentra en el texto");
        console.log(busqueda)
        console.log(texto)
    }
    else    
        alert("No se ha encontrado la palabra");
        console.log(busqueda)
        console.log(texto)
}