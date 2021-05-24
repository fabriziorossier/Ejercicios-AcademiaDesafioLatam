// Declaracion de variables
let numero = 0;

// FUNCION - INICIO - Solicita un numero entre 1 y 20
function solicitarNumero() {
    do {
        numero = Number(prompt("Ingrese un número entre 1 y 20","3"));
        if (isNaN(numero)) {
            alert("Debe ingresar un número entre 1 y 20.\n\nPor favor, intente de nuevo.");
        }
        else if (numero < 1 || numero > 20) {
            alert(`El número ingresado fue ${numero}.\n\nNúmero fuera del rango de 1 a 20.\n\nPor favor, intente denuevo.`)
        }
    } while (isNaN(numero) || (numero < 1 || numero > 20));
    return numero;
}
// FUNCION - FIN - Solicita un numero entre 1 y 20

// FUNCION - INICIO - Calcula la tabla de multiplicar desde el 1 hasta el numero ingresado
function calcularTablaMultiplicar(numero) {
    for (i = 1; i <= numero; i++) {
        document.write(`<p>${i} x ${numero} = ${numero*i}</p>`);
        console.log(`${i} x ${numero} = ${numero*i}`);
    }
}
// FUNCION - FIN - Calcula la tabla de multiplicar desde el 1 hasta el numero ingresado

// FUNCION - INICIO - Calcula e imprime el factorial del numero ingresado
// NO utilizando recursividad
function imprimirFactorial(numero) {
    let factorial = 1;

    for (i = 1; i <= numero; i++) {
        factorial = factorial * i;
        console.log(`Factorial de ${i} es: ${factorial}`);
        document.write(`<p>Factorial de ${i} es: ${factorial}`);
    }
}
// FUNCION - FIN - Calcula e imprime el factorial del numero ingresado

// FUNCION - INICIO - Calcular recursivamente el factorial del numero ingresado
// Retorna solo el factorial del numero ingresado,
// y no el factorial de cada uno de los numeros anteriores hasta ese
function calcularFactorial(numero) {
    if (numero === 0) {
        return 1;
    }
    else {
        return numero * calcularFactorial(numero - 1);
    }
}
// FUNCION - FIN - Calcular recursivamente el factorial del numero ingresado

// Ejecucion de los requerimientos solicitados
numero = solicitarNumero();
calcularTablaMultiplicar(numero);
imprimirFactorial(numero); // Para uso NO recursivo mediante funcion imprimirFactorial()
// console.log(`Factorial de ${numero} es: ${calcularFactorial(numero)}`); // Para uso SI recursivo mediante funcion calcularFactorial()