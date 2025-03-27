# 🌍 Planificador de Viajes

## 🚀 Proyecto de Introducción a ECMAScript

## 📋 Descripción del Problema

Imagina que eres parte del equipo encargado de actualizar una aplicación antigua para planificar viajes. Los usuarios deben poder registrar destinos de viaje, la fecha en que desean viajar, y calcular el costo total estimado del viaje en función de las opciones de alojamiento y transporte que elijan.

## 📝 Instrucciones para Resolver el Problema

### Flujo Básico de la Aplicación

Entender el flujo básico de la aplicación existente:

1. Registrar destinos
2. Calcular el costo
3. Mostrar el itinerario

**Registrar destinos:** Llamar a `registrarDestino(destino, fecha, transporte)` para agregar destinos al sistema.

**Calcular el costo:** El costo se calcula con la función `calcularCosto()`, la cual toma el destino y el transporte como parámetros.

**Mostrar el itinerario:** Llamar a `mostrarItinerario()` para recorrer todos los viajes guardados y mostrar sus detalles.

### Modernización del Código

- Reemplazar funciones tradicionales por funciones de flecha donde consideres necesario.
- Reemplazar declaraciones de `var` por `let` o `const` cuando corresponda:
  - `let` para variables que pueden cambiar
  - `const` para variables que no cambiarán (como el arreglo de destinos)
- Dividir el código en módulos (archivos separados) para separar:
  - Lógica de gestión de viajes
  - Interacción con el usuario

### Extensiones Opcionales

Puedes extender la funcionalidad del sistema añadiendo:

- Más destinos
- Más opciones de transporte
- Cálculo de descuentos según el número de personas en el viaje
- Otras mejoras que consideres adecuadas

## 💻 Código Base

Usa como punto de partida el código del [siguiente archivo compartido](https://drive.google.com/file/d/1dPoAItDoRYF4uTqmtvaNGuBF_3LJp3Jh/view?usp=sharing)
