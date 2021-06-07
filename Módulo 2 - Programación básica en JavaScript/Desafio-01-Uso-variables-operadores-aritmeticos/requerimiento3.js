// Desafio 1 - Requerimiento 3 - Fabrizio Rossier

// Creacion de variable y solicitud de grados celcius al usuario con validaciones
do {
    var gradosc = Number(prompt("Ingrese la temperatura en grados celcius:"));
    if (gradosc < -273.15)
    {
        alert("Ingreso un número menor al zero absoluto.\n\nPor favor, intente de nuevo con un número mayor o igual a -273.15.");
    }
    if (isNaN(gradosc))
    {
        alert("Debe ingresar un número.\n\nPor favor, intente de nuevo.");
    }
} while (gradosc < -273.15 || isNaN(gradosc))

// Operaciones de conversion entre grados Celcius con Kelvin y Fahrenheit
let gradosk = gradosc + 273.15;
let gradosf = (gradosc * 9/5) + 32;

// Impresion de resultados de Operaciones
alert(`La temperatura ingresada de ${gradosc}° Celcius es equivalente a ${gradosk}° Kelvin.\n\nLa temperatura ingresada de ${gradosc}° Celcius es equivalente a ${gradosf}° Fahrenheit.`);