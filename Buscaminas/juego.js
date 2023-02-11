

//Declaración de variables 
let tablero;
let x;
let y;
let filas;
let columnas;
let minas;

//Función para crear el tablero
function crearTablero(filas, columnas, minas) {
    tablero = new Array(filas);
    for (let i = 0; i < tablero.length; i++) {
        tablero[i] = new Array(columnas);
    }
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            tablero[i][j] = 0;
        }
    }
 
    //Asignando minas al tablero
    for (let i = 0; i < minas; i++) {
        x = Math.floor(Math.random() * filas);
        y = Math.floor(Math.random() * columnas);
        if (tablero[x][y] != "M") {
            tablero[x][y] = "M";
        }
        else {
            i--;
        }
    }
 
    //Asignando numeros al tablero
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] != "M") {
                let contador = 0;
                if (i > 0 && j > 0 && tablero[i - 1][j - 1] == "M") {
                    contador++;
                }
                if (i > 0 && tablero[i - 1][j] == "M") {
                    contador++;
                }
                if (i > 0 && j < tablero[i].length - 1 && tablero[i - 1][j + 1] == "M") {
                    contador++;
                }
                if (j < tablero[i].length - 1 && tablero[i][j + 1] == "M") {
                    contador++;
                }
                if (i < tablero.length - 1 && j < tablero[i].length - 1 && tablero[i + 1][j + 1] == "M") {
                    contador++;
                }
                if (i < tablero.length - 1 && tablero[i + 1][j] == "M") {
                    contador++;
                }
                if (i < tablero.length - 1 && j > 0 && tablero[i + 1][j - 1] == "M") {
                    contador++;
                }
                if (j > 0 && tablero[i][j - 1] == "M") {
                    contador++;
                }
                tablero[i][j] = contador;
            }
        }
    }
    console.log(tablero);
    return tablero;
}
 
//Función para jugar
function jugar(x, y) {
    if (tablero[x][y] == "M") {
        console.log("¡Has perdido!!");
    }
    else {
        console.log("Has encontrado: " + tablero[x][y]);
    }
}
 
//Llamada a las funciones 
crearTablero(,,);
jugar(,);