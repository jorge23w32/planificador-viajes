import {calcularCosto, calcularDescuento} from "./calculosCostos.js";
// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export function registrarDestino(destino, fecha, transporte, personas = 1) {
    const descuento= calcularDescuento(personas);
    const costos = calcularCosto(destino, transporte, descuento);
    const costo = costos.costo
    const costoFinal = costos.costoFinal
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        descuento,
        costo,
        costoFinal
    };
    destinos.push(nuevoViaje);
}

// Función para mostrar el itinerario de los viajes registrados
export function mostrarItinerario() {
    destinos.forEach((viaje) => {
        console.log("_________________________________");
        for (const propiedad in viaje) {
            if (propiedad === 'descuento') {
                let descuento = viaje[propiedad];
                switch (descuento) {
                    case 25:
                        console.log(`Felicidades, gracias a que reservaste vuelos para ${viaje.personas} personas obtuviste un descuento del ${descuento}%`);
                        break;
                    case 15:
                        console.log(`Felicidades, gracias a que reservaste vuelos para ${viaje.personas} personas obtuviste un descuento del ${descuento}%`);
                        break;
                    case 5:
                        console.log(`Felicidades, gracias a que reservaste vuelos para ${viaje.personas} personas obtuviste un descuento del ${descuento}%`);
                        break;
                    case 0:
                        console.log(`¿Quieres obtener un descuento? Si tu respuesta es sí, reserva el mismo vuelo para 1 persona más`);
                        break;
                }
            } else {
                console.log(`${propiedad}:    ${viaje[propiedad]}`);
            }
        }
        console.log("_________________________________\n");
    });
}
