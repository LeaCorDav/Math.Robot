//___________________________
// MEDIA ARITMETICA
//___________________________
// Formula media aritmetica
function calcularMediaAritmetica(lista){
    /* let sumaLista = 0;
    for(let i = 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
    } */

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Inicializo array
var arrayNumerosAM = [];

// Formula para sumar nuevos numeros
function arraySumarNumeros(numero, array){    
    var masNumeros = array.push(numero);    
    return masNumeros;
}

//Añadiendo cantidades al Array del HTML
function onclickSumarNumero(){
    const inputNumero1 = Number(document.getElementById("InputNumero1").value);

    const sumarInput = arraySumarNumeros(inputNumero1, arrayNumerosAM);
    const resultadoArray = document.getElementById("ResultadoNumerosA");
    
    resultadoArray.innerText = "Numbers entered: " + arrayNumerosAM;    
    return sumarInput;         
} 

//Calculando media aritmetica del HTML
function onclickMediaAritmetica(){
    const mediaAritmetica = calcularMediaAritmetica(arrayNumerosAM);
    const resultado = document.getElementById("ResultadoMediaAritmetica");
    resultado.innerText = "The arithmetic median of all numbers introduced is " + mediaAritmetica;
}

//____________________
// MEDIANA
//____________________
// Inicializo variable
var arrayNumerosMediana = [];

//Declaro variable de mediana
let mediana;

// Funcion para ordenar numeros de menor a mayor
function compararNumeros(a, b){
    return a - b;
}

// Funcion para validar si la cantidad de elementos del array es par o impar
function esPar(cantidad){
    if(cantidad % 2 === 0){
        return true;
    } else{
        return false;
    }
}

//Para averiguar los valores medios del array 
function mitadLista(array){
    const mitadArray = array.length / 2;
    return mitadArray;
}

//Añadiendo cantidades al Array del HTML
function onclickMedia(){
    const inputNumero2 = Number(document.getElementById("InputNumero2").value);
    const resultadoArray = document.getElementById("ResultadoNumerosB");
    const resultadoMediana = document.getElementById("ResultadoMedia"); 

    const sumarInput = arraySumarNumeros(inputNumero2, arrayNumerosMediana);  
    const arrayOrdenado = arrayNumerosMediana.sort(compararNumeros);
    var mitadListadelArray = mitadLista(arrayOrdenado);

    if(esPar(arrayOrdenado.length)){
        const elemento1 = parseInt(mitadListadelArray);
        const elemento2 = parseInt(mitadListadelArray - 1);
    
        const promedio = (arrayOrdenado[elemento1] + arrayOrdenado[elemento2]) / 2;
        mediana = promedio;        
    } else {
        const media = parseInt(mitadLista(arrayOrdenado));
        mediana = arrayOrdenado[media];        
    };

    resultadoArray.innerText = "Numbers entered: " + arrayOrdenado; 
    resultadoMediana.innerText = "Numbers entered: " + mediana;
    return sumarInput;         
} 

//____________________
// MODA
//____________________
function onclickModa(){
    const inputNumeros = document.getElementById("InputNumero3").value;
    const arrayInput = inputNumeros.split(" ");
    const listaInputs = {};    

    arrayInput.map(
        function(elemento){
            if(listaInputs[elemento]){
                listaInputs[elemento] += 1;
            } else{
                listaInputs[elemento] = 1;
            }        
        }
    );

    const listaInputArray = Object.entries(listaInputs).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const arrayModa = listaInputArray[listaInputArray.length - 1];
    const moda = arrayModa[0];

    const resultadoNumeros = document.getElementById("ResultadoNumerosC");
    resultadoNumeros.innerText = "Numbers entered: " + arrayInput;

    const resultadoModa = document.getElementById("ResultadoModa");
    resultadoModa.innerText = "The mode is: " + moda;   
}