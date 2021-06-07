// Creacion de variables
var nombre;
var apellido;
var carrera;
var ramos = [];
var notasRamo1 = [];
var notasRamo2 = [];
var notasRamo3 = [];
var notasAprobacion = [];
var promedios = [0,0,0];
var notaMinima = 0;

// Solicitud de Nombre y Apellido al usuario
nombre = prompt("Ingrese su primer nombre:", "Nombre");
apellido = prompt("Ingrese su primer apellido:", "Apellido");
carrera = prompt("Ingrese su carrera:","Carrera");

// Solicitar 3 ramos
for (i = 0; i < 3; i++) {
    ramos[i] = prompt(`Ingrese el nombre del ramo número ${i+1}:`,`Ramo`);
}

// Solicitar las notas de los 3 ramos y la nota de aprobacion del ramo
for (i = 0; i < 3; i++) {

    // Ramo 1
    if (i == 0) {
        // Solicita 3 notas para este ramo
        for (j = 0; j < 3; j++) {
            notasRamo1[j] = prompt(`Ingrese nota ${j+1} [${ramos[i]}]:`,`5.0`);
        }
        // Solicita nota de aprobacion para este ramo
        notasAprobacion[i] = prompt(`Ingrese nota aprobación [${ramos[i]}]:`,`4.0`);
        // Calcula el promedio para este ramo
        for (k = 0; k < 3; k++) {
            promedios[i] += Number((notasRamo1[k])/3);
        }
    }

    // Ramo 2
    else if (i == 1) {
        // Solicita 3 notas para este ramo
        for (j = 0; j < 3; j++) {
            notasRamo2[j] = prompt(`Ingrese nota ${j+1} [${ramos[i]}]:`,`5.5`);
        }
        // Solicita nota de aprobacion para este ramo
        notasAprobacion[i] = prompt(`Ingrese nota aprobación [${ramos[i]}]:`,`4.0`);
        // Calcula el promedio para este ramo
        for (k = 0; k < 3; k++) {
            promedios[i] += Number((notasRamo2[k])/3);
        }
    }

    // Ramo 3
    else if (i == 2) {
        // Solicita 2 notas para este ramo
        // La 3ra nota estara pendiente
        for (j = 0; j < 2; j++) {
            notasRamo3[j] = prompt(`Ingrese nota ${j+1} [${ramos[i]}]:`,`6.0`);
        }
        // Solicita nota de aprobacion para este ramo
        notasAprobacion[i] = prompt(`Ingrese nota aprobación [${ramos[i]}]:`,`4.0`);
        // Calcula el promedio para este ramo
        for (k = 0; k < 2; k++) {
            promedios[i] += Number((notasRamo3[k])/2);
        }
        // Calcula la nota minima a obtener en la nota3 del ramo para aprobarlo segun la nota de aprobacion para este ramo
        notaMinima = (notasAprobacion[2] - promedios[2] / 2) * 3;
    }
}
