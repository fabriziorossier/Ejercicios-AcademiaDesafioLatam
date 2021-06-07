// Desafio 1 - Requerimiento 4 - Fabrizio Rossier

// Solicita una cantidad de dias al usuario con validaciones
do {
    var totalDias = parseInt(prompt("Ingrese una cantidad de días:"));
    if (totalDias < 0)
    {
        alert("Ingreso una cantidad de días menor a zero.\n\nPor favor, intente de nuevo.");
    }
    if (totalDias == 0)
    {
        alert("Ingreso una cantidad de zero días.\n\nPor favor, intente de nuevo.");
    }
    if (isNaN(totalDias))
    {
        alert("Debe ingresar un número.\n\nPor favor, intente de nuevo.");
    }
} while (totalDias <= 0 || isNaN(totalDias));

// Creacion de variables para calcular Años, Semanas y Dias
let anios = 0;
let semanas = 0;
let diasRestantes = 0;

// Determina la cantidad de Años, Semanas y Dias segun los dias ingresados por el usuario
// Se ignoran años bisiestos
// Año = 365 Dias
// Semana = 7 Dias

// Version 1
// Algoritmo propio
if (totalDias >= 365)
{
    anios = Math.floor(totalDias / 365);
    diasRestantes = totalDias % 365;
    
    if (diasRestantes >= 7)
    {
        semanas = Math.floor(diasRestantes / 7);
        diasRestantes = diasRestantes % 7;
    }
}
else
{
    if (totalDias >= 7)
    {
        semanas = Math.floor(totalDias / 7);
        diasRestantes = totalDias % 7;
    }
    else
    {
        diasRestantes = totalDias;
    }
}

// Version 2 - Para comprobacion
// Basada en este algoritmo: https://www.w3resource.com/c-programming-exercises/basic-declarations-and-expressions/c-programming-basic-exercises-8.php
/* anios = Math.floor(totalDias / 365);
semanas = Math.floor((totalDias % 365) / 7);
diasRestantes = Math.floor(totalDias - ((anios*365) + (semanas*7))); */

// Muestra al usuario el resultado de la cantidad de Años, Semanas y Dias segun los dias ingresados
alert(`La cantidad de días ingresados de ${totalDias} días, corresponde a:\n\n${anios} Años ${semanas} Semanas ${diasRestantes} Días.`);