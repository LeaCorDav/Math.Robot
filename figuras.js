//________________________________________
// PERIMETROS  
//________________________________________
// Perimetro con todos los 4 lados iguales (Cuadrado)
function perimetro4LadosIguales(arista){
    return arista * 4;
}

// Perimetro 4 lados con 2 lados iguales(Rectangulo)
function perimetro4Lados2Iguales(arista1, arista2){
    return (arista1 * 2) + (arista2 * 2);
}

// Perimetro con todos los 3 lados iguales (Triangulo equilatero)
function perimetro3Lados(arista1, arista2, base){    
    return parseInt(arista1) + parseInt(arista2) + parseInt(base);
}


//__________________
// AREAS
//__________________
// Area de Cuadrado
function areaCuadrado(arista){
    return arista ** 2;
}

// Area base x altura (Rectangulo, Paralelogramo)
function areaBaseAltura(arista1, arista2){
    return arista1 * arista2;
}

// Area base x altura / 2
function areaBaseAlturaEntre2(base, altura){
    return (base * altura) / 2;
}

// Area de triangulo Equilatero y demas
function areaTrianguloEquiIso(arista1, base){
    const alturaTriangulo = (Math.sqrt((arista1 ** 2) - ((base / 2)** 2)));
    return (base * alturaTriangulo) / 2;
}
function areaTrianguloEtc(arista1, arista2, base){
    const semiper = perimetro3Lados(arista1, arista2, base) / 2;       
    return Math.sqrt(semiper * (semiper - arista1) * (semiper - arista2) * (semiper - base));
}

// Area de Rombo
function areaRomboAngulo(arista, angulo){
    const radianes = (angulo * Math.PI) / 180;      
    return arista * arista * Math.sin(radianes);
}

//Area de Romboide
function areaRomboideAngulo(arista1, arista2, angulo){
    const radianes = (angulo * Math.PI) / 180;      
    return arista1 * arista2 * Math.sin(radianes);
}


// Perimetro y área de Circulo
const diametroCirculo = (radio) => radio * 2;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio ** 2) * Math.PI;
}


//_____________________________
//Conectar con HTML
//_____________________________
// Llamado a cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado").value;    

    const perimetro = perimetro4LadosIguales(input);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado").value;
    
    const area = areaCuadrado(input);
    alert(area);
}

//Llamado a rectangulo
function calcularPerimetroRectangulo(){
    const input1 = document.getElementById("InputRect1").value;
    const input2 = document.getElementById("InputRect2").value;

    const perimetro = perimetro4Lados2Iguales(input1, input2);
    alert(perimetro);
}
function calcularAreaRectangulo(){
    const input1 = document.getElementById("InputRect1").value;
    const input2 = document.getElementById("InputRect2").value;

    const area = areaBaseAltura(input1, input2);
    alert(area);
}

// Llamado a triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1").value;
    const input2 = document.getElementById("InputTriangulo2").value;
    const inputBase = document.getElementById("InputTriangulo3").value;    

    const perimetro = perimetro3Lados(input1, input2, inputBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1").value;
    const input2 = document.getElementById("InputTriangulo2").value;
    const inputBase = document.getElementById("InputTriangulo3").value; 
    const check = document.querySelector('input[name="check"]:checked').value;    

    if (check == "eqis"){
        const area = areaTrianguloEquiIso(input1, inputBase);
        alert(area);
    } else if (check == "rect"){
        const area = areaBaseAlturaEntre2(input2, inputBase);
        alert(area);
    } else if (check == "otro"){
        const area = areaTrianguloEtc(input1, input2, inputBase);
        alert(area);
    } else {
        alert("Choose the triangle's type");
    }
}

// Llamado a rombo
function calcularPerimetroRombo(){
    const input = document.getElementById("InputLado").value;
    
    const perimetro = perimetro4LadosIguales(input);
    alert(perimetro);
}
function calcularAreaAngulo(){
    const lado = document.getElementById("InputLado").value;
    const angulo = document.getElementById("InputAngulo").value;

    const area = areaRomboAngulo(lado, angulo);
    alert(area);
}
function calcularAreaDiagonal(){
    const d1 = document.getElementById("InputDiagonal1").value;
    const d2 = document.getElementById("InputDiagonal2").value;

    const area = areaBaseAlturaEntre2(d1, d2);
    alert(area);
}

//Llamando a romboide
function calcularPerimetroRomboide(){
    const ladoA = document.getElementById("InputLadoA").value;
    const ladoB = document.getElementById("InputLadoB").value;

    const perimetro = perimetro4Lados2Iguales(ladoA, ladoB);
    alert(perimetro);
}
function calcularAreaAnguloRomboide(){
    const ladoA = document.getElementById("InputLadoA").value;
    const ladoB = document.getElementById("InputLadoB").value; 
    const angulo = document.getElementById("InputAnguloR").value;

    const area = areaRomboideAngulo(ladoA, ladoB, angulo);
    alert(area);
}
function calcularAreaAlturaRomboide(){
    const ladoA = document.getElementById("InputLadoA").value;
    const altura = document.getElementById("InputAltura").value; 

    const area = areaBaseAltura(ladoA, altura);
    alert(area);
}


// Llamado a circulo
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