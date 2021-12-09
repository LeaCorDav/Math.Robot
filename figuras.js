// Cuadrado
let ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ** 2;

console.group("Cuadrado");
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + " pixeles")
console.log ("El perimetro del cuadrado mide: " + perimetroCuadrado + " pixeles");
console.log ("El área del cuadrado mide: " + areaCuadrado + " pixeles^2");
console.groupEnd();

// Triangulo
let ladoTriangulo1 = 10;
let ladoTriangulo2 = 4;
let baseTriangulo = 16;
const alturaTriangulo = (Math.sqrt((ladoTriangulo1 ** 2) - ((baseTriangulo / 2)** 2)));

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.group("Triangulo");
console.log ("Los lados del triangulo miden: " + ladoTriangulo1 + ", " + ladoTriangulo2 + ", " + baseTriangulo + " pixeles");
console.log ("El perimetro del triangulo mide: " + perimetroTriangulo + " pixeles");
console.log ("El área del triangulo mide: " + perimetroTriangulo + " pixeles^2");
console.groupEnd();

//Circulo
let radioCirculo = 4;
let diametroCirculo = radioCirculo * 2;

const perimetroCirculo = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI;

console.group("Circulo");
console.log ("El radio del circulo mide: " + radioCirculo + " pixeles y un diametro de " + diametroCirculo + " pixeles");
console.log ("El perimetro del circulo mide: " + perimetroCirculo + " pixeles");
console.log ("El área del circulo mide: " + areaCirculo + " pixeles^2");
console.groupEnd();