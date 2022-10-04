// ACTIVIDAD 1
// let num1 = parseInt(prompt("Introduce num1: "));
// let num2 = parseInt(prompt("Introduce num2: "));
// let num3 = parseInt(prompt("Introduce num3: "));
// let nombre = prompt("Introduce nombre:");
// let apellido = prompt("Introduce apellido: ");
// document.write(`${num1} ${num2} ${num3} ${nombre} ${apellido}`);



// ACTIVIDAD 2
// let num1 = parseInt(prompt("Introduce num1: "));
// let num2 = parseInt(prompt("Introduce num2: "));
// let num3 = parseInt(prompt("Introduce num3: "));
// let nombre = prompt("Introduce nombre:");
// let apellido = prompt("Introduce apellido: ");

// document.write(`${num1} + ${num2} + ${num3} = ${num1 + num2 + num3} <br>`);
// document.write(`${num1} * ${num2} * ${num3} = ${num1 * num2 * num3} <br>`);
// document.write(`${num1/num3} <br>`);
// document.write(`${nombre} ${apellido}`);



// ACTIVIDAD 3
// for(let i = 1; i <= 3; i++){
//     let num = parseInt(prompt(`Introduce numero ${i}:`));
//     if( `${num}` > 10 ){
//         document.write(`${num} es mayor que 10 <br>`);
//     }
// }



//ACTIVIDAD 4
// let dia = prompt("Introduce el día: ");
// let mes = prompt("Introduce el mes: ");

// if(dia != "24" || mes != "12"){
//     alert(`${dia}/${mes} no es el día de navidad`);
// } else {
//     alert(`Feliz navidad!!!`);
// }




//ACTIVIDAD 5
// let sueldo = parseInt(prompt("Introduzca el sueldo: "));
// let antiguedad = parseInt(prompt("Introduzca años de antiguedad: "));

// if(sueldo < 500 && antiguedad >= 10){
//     document.write(`Le corresponde un sueldo de ${sueldo*3}€`);
// } else if (sueldo < 500 && antiguedad < 10){
//     document.write(`Le corresponde un sueldo de ${sueldo*2}€`);
// } else {
//     document.write(`Le corresponde un sueldo de ${sueldo}€`);
// }



// ACTIVIDAD 6
// let calificacion = parseFloat(prompt("Ingrese una calificacion: "));

// if (calificacion >= 0 && calificacion < 3){
//     alert("MUY DEFICIENTE");
// } else if (calificacion >= 3 && calificacion < 5){
//     alert("INSUFICIENTE");
// } else if (calificacion >= 5 && calificacion < 6){
//     alert("BIEN");
// } else if (calificacion >= 6 && calificacion < 9){
//     alert("NOTABLE");
// } else if(calificacion >= 9 && calificacion <= 10){
//     alert("SOBRESALIENTE");
// } else {
//     alert(`\"${calificacion}\" es un valor no aceptado`);
// };



//ACTIVIDAD 7
// let numero = parseInt(prompt("Introduce un entero:"));
// let contador = 2;
// let ristra = "";
// if(numero >= 2){
//     while(contador <= numero){
//         ristra += `${contador} <br>`;
//         contador += 2;
//     }
//     document.write(ristra);
// } else {
//     alert("Entero mayor o igual a 2");
// }



//ACTIVIDAD 8
// let numero = parseInt(prompt("Introduce un entero:"));
// let contador = 1;
// let ristra = "";
// if(numero >= 1){
//     while(contador <= numero){
//         ristra += `${contador} <br>`;
//         contador += 2;
//     }
//     document.write(ristra);
// } else {
//     alert("Entero mayor o igual a 1");
// }



// ACTIVIDAD 9
// let num1 = parseInt(prompt("Introduce num1: "));
// let num2 = parseInt(prompt("Introduce num2: "));

// for(let i = 1; i <= num2; i++){
//     document.write(`${num1} * ${i} = ${num1*i} <br>`);
// }



// ACTIVIDAD 10
// let hayDiez = false;
// let introducido;

// do{
//     introducido = parseInt(prompt("Introduce nota (numero entero): "));
//     if (introducido == 10){
//         hayDiez = true;
//     }
// } while (introducido != -1);

// if (hayDiez){
//     alert("SI");
// } else {
//     alert("NO");1
// }



// ACTIVIDAD 11
// let numAsteriscos = parseInt(prompt("Tamaño de la base del triangulo:"));
// let triangulo = "";

// for(let i = 1; i <= numAsteriscos; i++){
//     for(let j = 0; j < i; j++){
//         triangulo += "*";
//     }
//     triangulo += "<br>";
// }

// document.write(triangulo);



// ACTIVIDAD 12
// function suma(a, b){
//     return a + b;
// }

// version anonima
// const sumaAnonima = function(a, b){
//     return a + b;
// }

// version lambda
// const sumaLambda = (a , b) => a + b;

// let num1 = parseInt(prompt("Introduzca un entero: "));
// let num2 = parseInt(prompt("Introduzca otro entero: "));

// alert("Resultado =" +  suma(num1, num2));
// alert("Resultado = " + sumaAnonima(num1, num2));
// alert("Resultado = " + sumaLambda(num1, num2));

// ACTIVIDAD 13
// function esBisiestoAnonima(year){
//     year = parseInt(year);
//     if (year % 4 == 0){
//         if (year % 100 == 0 && year % 400 != 0){
//             return 0;
//         }
//         return 1;
//     } 
//     return 0;
// }

// version anonima
// const esBisiestoAnonima = function (year){
//     year = parseInt(year);
//     if (year % 4 == 0){
//         if (year % 100 == 0 && year % 400 != 0){
//             return 0;
//         }
//         return 1;
//     } 
//     return 0;
// }

// version lambda
// const esBisiestoLambda = year => {
//     year = parseInt(year);
//     if (year % 4 == 0){
//         if (year % 100 == 0 && year % 400 != 0){
//             return 0;
//         }
//         return 1;
//     } 
//     return 0;
// };


// let introducido = prompt("Introduce año para comprobar si es bisiesto: ");

// alert(esBisiesto(introducido));
// alert(esBisiestoAnonima(introducido));
// alert(esBisiestoLambda(introducido));


// ACTIVIDAD 14
// function perimetroRectangulo(base, altura){
//     return 2 * (base + altura);
// }

// version anonima
// const perimetroRectanguloAnonima = function (base, altura){
//     return 2 * (base + altura);
// };

// version lambda
// const perimetroRectanguloLambda = (base, altura) => 2 * (base + altura);

// let base = parseFloat(prompt("Base del  rectangulo: "));
// let altura = parseFloat(prompt("Altura del  rectangulo: "));

// alert("Perímetro rectangulo: " + perimetroRectangulo(base, altura));
// alert("Perímetro rectangulo: " + perimetroRectanguloAnonima(base, altura));
// alert("Perímetro rectangulo: " + perimetroRectanguloLambda(base, altura));


// ACTIVIDAD 15
// function esPrimo(numero){
//     numero = parseInt(numero);
//     let esPrimo = true;
//     for(let i = 2; i <= Math.sqrt(numero); i++){
//         if(numero % i === 0){
//             esPrimo = false;
//             break;
//         }
//     }
//     return esPrimo;
// }

//version anonima
// const esPrimoAnonima = function (numero){
//     numero = parseInt(numero);
//     let esPrimo = true;
//     for(let i = 2; i <= Math.sqrt(numero); i++){
//         if(numero % i === 0){
//             esPrimo = false;
//             break;
//         }
//     }
//     return esPrimo;
// }

// version Lambda
// const esPrimoLambda = numero => {
//     numero = parseInt(numero);
//     let esPrimo = true;
//     for(let i = 2; i <= Math.sqrt(numero); i++){
//         if(numero % i === 0){
//             esPrimo = false;
//             break;
//         }
//     }
//     return esPrimo;
// };

// // let introducido = prompt("Introduce un numero [1-10000]");
// // alert(esPrimo(introducido));
// // alert(esPrimoAnonima(introducido));
// alert(esPrimoLambda(introducido));