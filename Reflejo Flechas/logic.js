document.addEventListener("keydown", accion);

var botom = "./image/bottom.png";
var left = "./image/left.png";
var right = "./image/right.png";
var top = "./image/top.png";

var lista = [botom, left, right, top];
function accion(evento) {
    if (evento.keyCode == 32) {
        let posicion = Math.floor(Math.random() * lista.length);
        let acciona = lista[posicion];
        document.getElementById("flecha").src = acciona;
    }

}

function getTecla(evento) {
    let contador = 0;
    while ( contador < 4 ) {
        if (evento.key == "ArrowUp" && acciona == top) {
            contador ++;
            accion();

        } else if (evento.key =="ArrowDown" && acciona == botom) {
            contador ++;
            accion();
            

        } else if (evento.key == "ArrowLeft" && acciona == left) {
            contador ++;
            accion();
            
        } else if (evento.key == "ArrowRight" && acciona == right) {
            contador ++;
            accion();        
        } else {
            alert("Error");
            //fondo rojo
        }

    }

    

}