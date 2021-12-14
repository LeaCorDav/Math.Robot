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

// Funcion para ordenar numeros de menor a mayor
function compararNumeros(a, b){
    return a - b;
}

//Añadiendo cantidades al Array del HTML
function onclickSumarNumeroM(){
    const inputNumero2 = Number(document.getElementById("InputNumero2").value);

    const sumarInput = arraySumarNumeros(inputNumero2, arrayNumerosMediana);     
    const resultadoArray = document.getElementById("ResultadoNumerosB");    
    const arrayOrdenado = arrayNumerosMediana.sort(compararNumeros);

    resultadoArray.innerText = "Numbers entered: " + arrayOrdenado; 
    return sumarInput;         
} 

//Declarando variable para nuevo array ordenado
let arrayOrdenadoNuevo = arrayNumerosMediana;

// Funcion para validar si la cantidad de elementos del array es par o impar
function esPar(cantidad){
    if(cantidad % 2 === 0){
        return true;
    } else{
        return false;
    }
}

//Para averiguar los valores medios del array (ESTA APARECIEDO NAN ACA)
function mitadLista(array){
    const mitadArray = array.length / 2;
    return mitadArray;
}

var mitadListadelArray = mitadLista(arrayOrdenadoNuevo);

//Declaro variable de mediana
let mediana;

//Calculando Media del HTML
function onclickMedia(){   
    const resultadoMediana = document.getElementById("ResultadoMedia");     
    if(esPar(arrayNumerosMediana.length)){
        const elemento1 = parseInt(mitadListadelArray);
        const elemento2 = parseInt(mitadListadelArray - 1);
    
        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio;        
    } else {
        mediana = arrayNumerosMediana[mitadLista(arrayNumerosMediana)];        
    };

    resultadoMediana.innerText = "Numbers entered: " + mediana;
};
