// Cuadrado
function perimetroCuadrado (arista){
    return arista * 4;
}

function areaCuadrado(arista){
    return arista ** 2;
}


// Triangulo
function perimetroTriangulo(arista1, arista2, base){
    return arista1 + arista2 + base;
}

function areaTriangulo(arista1, base){
    const alturaTriangulo = (Math.sqrt((arista1 ** 2) - ((base / 2)** 2)));
    return (base * alturaTriangulo) / 2;
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