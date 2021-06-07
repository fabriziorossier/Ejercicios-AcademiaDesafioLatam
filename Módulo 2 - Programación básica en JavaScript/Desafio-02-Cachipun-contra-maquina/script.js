// Desafio 2 - Fabrizio Rossier

// Creacion de variables para jugadas del jugador y del computador
var jugador;
var computador;
var rondas;
var rondaActual = 1;
var rondasJugador = 0;
var rondasComputador = 0;
var rondasEmpate = 0;

// Solicitar número de rondas a jugar al usuario
do {
    rondas = parseInt(prompt("Ingrese el número de rondas que desea jugar:"));
    if (isNaN(rondas)) {
        alert("Debe ingresar un número.\n\nPor favor, intente de nuevo.");
    }
} while (isNaN(rondas))

// Jugar al cachipun durante el número de rondas especificado en la variable "rondas"
for (i = 0; i < rondas; i++, rondaActual++) {
    // Solicitar al usuario su jugada con validacion
    do {
        jugador = prompt(`Ronda ${rondaActual}.\n\nIngrese su opcion de cachipun: piedra, papel, tijera`).toLowerCase().trim();
        if (!jugador.match(/^(piedra|papel|tijera)$/)) {
            alert("Jugada no valida.\n\nDebe elegir alguna de las siguientes:\n\n- Piedra\n- Papel\n- Tijera");
        }
    } while (!jugador.match(/^(piedra|papel|tijera)$/))

    // Determinar aleatoriamente la jugada del computador como numero entero
    computador = Math.floor(Math.random() * 3);

    // Convertir la jugada del computador de numero entero a string
    if (computador === 0)
    {
        computador = "piedra";
    }
    else if (computador === 1)
    {
        computador = "papel";
    }
    else
    {
        computador = "tijera";
    }
    // Comparar resultado entre la jugada del jugador y del computador
    jugada(jugador,computador);
    //console.log(`computador es ${computador}`); // DEBUG - Para debugear el resultado de la jugada del computador
}
partida(rondasEmpate, rondasJugador, rondasComputador);

// Comparar resultado entre la jugada del jugador y del computador
// Informando quien ha resultado ganador o si fue un empate
function jugada(jugador, computador) {
    if (jugador === computador)
    {
        alert(`El resultado de la ronda ${rondaActual} es un empate`);
        rondasEmpate++;
    }
    else if (jugador == "piedra" && computador == "papel")
    {
        alert(`El computador ha ganado la ronda ${rondaActual} con ${jugador} v/s ${computador}`);
        rondasComputador++;
    }
    else if (jugador == "piedra" && computador == "tijera")
    {
        alert(`Has ganado la ronda ${rondaActual} con ${jugador} v/s ${computador}`);
        rondasJugador++;
    }
    else if (jugador == "papel" && computador == "piedra")
    {
        alert(`Has ganado la ronda ${rondaActual} con ${jugador} v/s ${computador}`);
        rondasJugador++;
    }
    else if (jugador == "papel" && computador == "tijera")
    {
        alert(`El computador ha ganado la ronda ${rondaActual} con ${jugador} v/s ${computador}`);
        rondasComputador++;
    }
    else if (jugador == "tijera" && computador == "piedra")
    {
        alert(`El computador ha ganado la ronda ${rondaActual} con ${jugador} v/s ${computador}`);
        rondasComputador++;
    }
    else if (jugador == "tijera" && computador == "papel")
    {
        alert(`Has ganado la ronda ${rondaActual} con ${jugador} v/s ${computador}`);
        rondasJugador++;
    }
}

function partida(rondasEmpate, rondasJugador, rondasComputador) {
    if (rondasJugador === rondasComputador) {
        alert(`El resultado de la partida es un empate, con el siguiente resultado:\n\n- Rondas ganadas por el jugador: ${rondasJugador}\n- Rondas ganadas por el computador: ${rondasComputador}\n- Rondas empatadas: ${rondasEmpate}`);
    }
    else if (rondasJugador > rondasComputador) {
        alert(`Has ganado la partida, con el siguiente resultado:\n\n- Rondas ganadas por el jugador: ${rondasJugador}\n- Rondas ganadas por el computador: ${rondasComputador}\n- Rondas empatadas: ${rondasEmpate}`)
    }
    else {
        alert(`El computador ha ganado la partida, con el siguiente resultado:\n\n- Rondas ganadas por el jugador: ${rondasJugador}\n- Rondas ganadas por el computador: ${rondasComputador}\n- Rondas empatadas: ${rondasEmpate}`)
    }
}