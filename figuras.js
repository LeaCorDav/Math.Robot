// Cuadrado
function perimetroCuadrado (arista){
    return arista * 4;
}

function areaCuadrado(arista){
    return arista ** 2;
}


// Triangulo
function perimetroTriangulo(arista1, arista2, base){    
    return parseInt(arista1) + parseInt(arista2) + parseInt(base);
}

function areaTrianguloEquiIso(arista1, base){
    const alturaTriangulo = (Math.sqrt((arista1 ** 2) - ((base / 2)** 2)));
    return (base * alturaTriangulo) / 2;
}

function areaTrianguloRec(arista2, base){
    return (base * arista2) / 2;
}

function areaTrianguloEtc(arista1, arista2, base){
    const semiper = perimetroTriangulo(arista1, arista2, base) / 2;       
    return Math.sqrt(semiper * (semiper - arista1) * (semiper - arista2) * (semiper - base));
}


//Circulo
const diametroCirculo = (radio) => radio * 2;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio ** 2) * Math.PI;
}


//Conectar con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const area = areaCuadrado(valor);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const valor1 = input1.value;
    const valor2 = input2.value;
    const valorbase = input3.value;

    const perimetro = perimetroTriangulo(valor1, valor2, valorbase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const valor1 = input1.value;
    const valor2 = input2.value;
    const valorbase = input3.value;
    const check = document.querySelector('input[name="check"]:checked').value;    

    if (check == "eqis"){
        const area = areaTrianguloEquiIso(valor1, valorbase);
        alert(area);
    } else if (check == "rect"){
        const area = areaTrianguloRec(valor2, valorbase);
        alert(area);
    } else if (check == "otro"){
        const area = areaTrianguloEtc(valor1, valor2, valorbase);
        alert(area);
    } else {
        alert("Choose the triangle's type");
    }
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const valor = input.value;

    const perimetro = perimetroCirculo(valor);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const valor = input.value;

    const area = areaCirculo(valor);
    alert(area);
}