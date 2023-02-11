// Tablero de juego
// 0 - En blanco
// 1 - Círculo
// 2 - Cruz
let tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Jugador
// 1 - Círculo
// 2 - Cruz
let jugador = 1;

// Comprueba si se puede colocar una ficha en el tablero.
function puedoColocar(pos) {
    return tablero[pos] == 0;
}

// Coloca una ficha en el tablero
function colocar(pos) {
    tablero[pos] = jugador;
    document.getElementById("d" + pos).className = 'jugador' + jugador;
}

// Cambia el turno del jugador.
function cambiarJugador() {
    if (jugador == 1) {
        jugador = 2;
    }
    else {
        jugador = 1;
    }
}

// Reinicia el juego.
function reiniciarJuego() {
    //jugador = 1;
    document.getElementById('finalizado').innerHTML='';
    for (pos = 0; pos < 9; pos++) {
        tablero[pos] = 0;
        document.getElementById("d" + pos).className = '';
    }
}

// Comprueba si tres casillas del tablero están en raya.
function validar(a,b,c) {
    return (a==b)&&(b==c)&&(a!=0);
}

// Comprueba si ha terminado el juego.
function juegoTerminado() {
    // Comprobamos cuantas casillas quedan por colocar.
    let contadorBlancos = 0;
    for(pos=0;pos<9;pos++){
        if(tablero[pos]==0){
            contadorBlancos++;
        }
    }
    let empate = (contadorBlancos==0);

    // Comprobamos que no haya un ganador.
    let ganador = validar(tablero[0],tablero[1],tablero[2]);
                validar(tablero[3],tablero[4],tablero[5]);
                validar(tablero[6],tablero[7],tablero[8]);
                validar(tablero[0],tablero[3],tablero[6]);
                validar(tablero[1],tablero[4],tablero[7]);
                validar(tablero[2],tablero[5],tablero[8]);
                validar(tablero[0],tablero[4],tablero[8]);
                validar(tablero[6],tablero[4],tablero[2]);

    if(ganador) {
        // Hay un ganador.
        document.getElementById('finalizado').innerHTML='<a href="http://www.google.es">El juego ha terminado. Hay un ganador.</a>';
        return true;
    }
    else if(empate) {
        // Nadie ha ganado pero no se puede colocar, es un empate.
        document.getElementById('finalizado').innerHTML='El juego ha terminado. Es un empate.';
        return true;
    }
    else {
        // No ha terminado el juego.
        return false;
    }
}

// Principal del juego.
function jugar(pos) {
    if (!juegoTerminado()) {
        if (puedoColocar(pos)) {
            colocar(pos);
            cambiarJugador();
            juegoTerminado();
        }
        else {
            alert("No puedes colocar aquí la ficha.")
        }
    }
}