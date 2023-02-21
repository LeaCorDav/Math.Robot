//Ingreso de datos del HTML
let listaInputs = [];    

function onclickSumar(){
    const inputDatos = document.getElementById("InputDatos").value;
    const arrayDatos = inputDatos.split("/");
    const pushLista = listaInputs.push(arrayDatos);       
    
    const entradaTexto = document.getElementById("Entradas");
    entradaTexto.innerText = "Name entered: " + arrayDatos[0] + " and salary entered: " + arrayDatos[1];

    return pushLista;    
};

console.log(listaInputs);


const peru = [];
peru.push({
    nombre: "Leandro",
    salario: 3000,
});
peru.push({
    nombre: "Ana",
    salario: 2400,
});
peru.push({
    nombre: "Ernesto",
    salario: 1500,
});
peru.push({
    nombre: "Salomon",
    salario: 900,
});
peru.push({
    nombre: "Juan",
    salario: 1000,
});
peru.push({
    nombre: "Alex",
    salario: 4000,
});
peru.push({
    nombre: "Luis",
    salario: 8000,
});
peru.push({
    nombre: "Silvana",
    salario: 1300,
});
peru.push({
    nombre: "Jessie",
    salario: 1800,
});
peru.push({
    nombre: "Giuliana",
    salario: 1100,
});
peru.push({
    nombre: "Jacky",
    salario: 3200,
});
peru.push({
    nombre: "Kathy",
    salario: 3500,
});