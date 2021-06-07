// Desafio 1 - Requerimiento 5 - Fabrizio Rossier

// Creacion de variables para realizar calculos
var suma = 0;
var numero;
var promedio = 0;

// Solicita al usuario 5 números y almacena la suma de estos en la variable "suma"
for (var i = 1; i <= 5; i++)
{
    do {
        numero = Number(prompt(`Ingrese el número ${i} que desea calcular:`));
        if (isNaN(numero))
        {
            alert("Debe ingresar un número.\n\nPor favor, intente de nuevo.");
        }
    } while (isNaN(numero))
    suma = suma + numero;
}

// Calcular el promedio de los numeros ingresados
promedio = suma / 5;

// Muestra al usuario la suma y el promedio de los numeros ingresados
alert(`La suma de los números es: ${suma}\nEl promedio de los números es: ${promedio}`);