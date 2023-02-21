// Formula principal
function calcularPrecioconDescuento(precio, descuento){
    const porcentajePrecio = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecio) / 100;

    return precioConDescuento;
}

//________________________________________________________________
// Introduce el precio y el descuento para obtener un precio final
function precioDescontado(){
    const inputPrecio = document.getElementById("InputPrecio").value;
    const inputDescuento = document.getElementById("InputDescuento").value;

    const precioFinal = calcularPrecioconDescuento(inputPrecio, inputDescuento);

    const resultado = document.getElementById("Resultado");
    resultado.innerText = "The final ammount you would have to pay is: $" + precioFinal;
}

//________________________________________________________________
// Para cupones
const cupones = [
    {
        nombre: "SPRING_DSC",
        descuento: 15,
    },
    {
        nombre: "SUMMER_DSC",
        descuento: 10,
    },
    {
        nombre: "INDEPENDENCEDAY_DSC",
        descuento: 30,
    },
    {
        nombre: "BLACKFRIDAY_DSC",
        descuento: 75,
    },
    {
        nombre: "XMASS_DSC",
        descuento: 25,
    },    
];

function precioDescontadoCupon(){
    const inputPrecio = document.getElementById("InputPrecio2").value;
    const inputCupon = document.getElementById("InputCupon").value;    
    
    const validandoCupon = function(cupon){
        return cupon.nombre === inputCupon;
    }
    
    const usuarioCupon = cupones.find(validandoCupon);
    
    if (!usuarioCupon){
        alert ("The coupon " + inputCupon + " is not valid");
    } else {
        const descuentoC = usuarioCupon.descuento;
        const precioFinal = calcularPrecioconDescuento(inputPrecio, descuentoC)
        const resultado = document.getElementById("ResultadoCupon");
        resultado.innerText = "The final price with the coupon discount is: $" + precioFinal;
    }    
}