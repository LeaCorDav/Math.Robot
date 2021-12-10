


function calcularPrecioconDescuento(precio, descuento){
    const porcentajePrecio = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecio) / 100;

    return precioConDescuento;
}
