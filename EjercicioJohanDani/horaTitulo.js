function hora() {
    let today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let time = h + ":" + m + ":" + s;
    document.title = time
}
let identificador = setInterval(hora,1000)
console.log(identificador)

function parar(){
    clearInterval(identificador)
    console.log("parando el intervalo con este identificador")
}