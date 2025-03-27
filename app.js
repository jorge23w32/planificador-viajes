import {mostrarItinerario, registrarDestino} from "./viajes.js";

const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren", 2);
    registrarDestino("New York", "2024-08-10", "Avión", 6);
    registrarDestino("Paris", "2024-05-22", "Tren", 12);
    registrarDestino("Londres", "2024-09-05", "Avión", 4);
    registrarDestino("New York", "2024-10-18", "Tren", 1);
    registrarDestino("Paris", "2024-11-30", "Avión", 8);
    registrarDestino("Londres", "2024-12-25", "Tren", 15);
    registrarDestino("New York", "2024-04-03", "Avión", 3);
    registrarDestino("Paris", "2024-07-20", "Tren", 10);
    registrarDestino("Londres", "2024-06-19", "Avión", 2);
    registrarDestino("New York", "2024-08-05", "Tren", 7);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}
iniciarApp()
