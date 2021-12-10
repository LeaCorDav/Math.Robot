function calcularPrecioconDescuento(precio, descuento){
    const porcentajePrecio = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecio) / 100;

    return precioConDescuento;
}


function precioDescontado(){
    const inputPrecio = document.getElementById("InputPrecio").value;
    const inputDescuento = document.getElementById("InputDescuento").value;

    const precioFinal = calcularPrecioconDescuento(inputPrecio, inputDescuento);

    const resultado = document.getElementById("Resultado");
    resultado.innerText = "The final ammount you would have to pay is: $" + precioFinal;
}