// Helpers
function esPar(cantidad){
    if(cantidad % 2 === 0){
        return true;
    } else{
        return false;
    }
}
function mitadLista(array){
    const mitadArray = array.length / 2;
    return mitadArray;
}

// Calcula mediana de valores de Arrays
function medianaSalarios(lista){
    const mitad = parseInt(mitadLista(lista));

    if (esPar(lista.length)){
        const mitad1 = mitad;
        const mitad2 = mitad - 1;

        const mediana = (lista[mitad1] + lista[mitad2]) / 2;
        return mediana;
    } else{
        const mediana = lista[mitad];
        return mediana;
    }
}

// Arrays de Perú
const salariosPe = peru.map(
    function(persona){
        return persona.salario;
    }
);
const salariosPeOrdenado = salariosPe.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);

//Mediana General de salarios
const medianaGeneralPe = medianaSalarios(salariosPe);

// Mediana del top 10%
const sliceStart = parseInt((salariosPeOrdenado.length * (100 - 10)) / 100);

const salariosTop10 = salariosPeOrdenado.slice(
    sliceStart, 
    salariosPeOrdenado.length
);
const medianaTop10 = medianaSalarios(salariosTop10);