// Función para calcular el costo del viaje
export function calcularCosto(destino, transporte, descuento = 0) {
    let costoBase = 0;
    // Costo base por destino
    let costoDestino = {
        'Paris': 500,
        'Londres': 400,
        'New York': 600
    }
    // Costo adicional por tipo de transporte
    const costoTransporte = {
        'Avión': 200,
        'Tren': 100
    }
    costoBase = costoDestino[destino] + costoTransporte[transporte];
    let descuentoTotal = costoBase * (descuento / 100);
    let costo = costoBase
    let costoFinal = costoBase - descuentoTotal
    return {costo, costoFinal};
}

export function calcularDescuento(personas) {
    return personas > 1 ? personas > 10 ? 25 : personas > 5 ? 15 : 5 : 0;
}
