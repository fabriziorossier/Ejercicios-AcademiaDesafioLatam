// Desafio 1 - Requerimiento 2 - Fabrizio Rossier

// Creacion de variables y solicitud de ingreso del primer numero con validaciones
do {
    var num1 = Number(prompt("Ingrese el primer número mayor que 0:"));
    if (num1 <= 0)
    {
        alert("El número ingresado debe ser mayor que 0.\n\nPor favor, intente de nuevo.");
    }
    if (isNaN(num1))
    {
        alert("Debe ingresar un número.\n\nPor favor, intente de nuevo.");
    }
} while (num1 <= 0 || isNaN(num1));

// Creacion de variables y solicitud de ingreso del segundo numero con validaciones
do {
    var num2 = Number(prompt("Ingrese el segundo número mayor que 0, debe ser distinto al primer numero ingresado:"));
    if (num2 <= 0)
    {
        alert("El número ingresado debe ser mayor que 0.\n\nPor favor, intente de nuevo.");
    }
    if (num2 == num1)
    {
        alert(`El número ingresado debe ser distinto del primer número.\n\nUsted ingreso ${num1} como primer número.\n\nPor favor, intente de nuevo.`);
    }
    if (isNaN(num2))
    {
        alert("Debe ingresar un número.\n\nPor favor, intente de nuevo.");
    }
} while (num2 <= 0 || num2 == num1 || isNaN(num2));

// Operaciones de SUMA, RESTA, DIVISION, MULTIPLICACION, MODULO
let suma = num1 + num2;
let resta = num1 - num2;
let division = num1 / num2;
let multiplicacion = num1 * num2;
let modulo = num1 % num2;

// Impresion de resultados de Operaciones
alert(`La suma del primer y segundo número es ${suma}\n
El primer número restado el segundo es ${resta}\n
La division del primer por el segundo número es ${division}\n
La multiplicacion del primer y segundo número es ${multiplicacion}\n
El modulo del primer número dividido por el segundo es ${modulo}
`);