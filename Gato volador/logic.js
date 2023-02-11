
let gato= document.getElementById("gato");
var x = 100;
var y = 100;
const movimiento = 50;



function posicion (x, y) {
    gato.style.top = y+"px";
    gato.style.left = x+"px";
    
}

function pulsarTecla(evento) {
    if (evento.key == "ArrowUp") {
        y-=movimiento;

    } else if (evento.key =="ArrowDown") {
        y+=movimiento;

    } else if (evento.key == "ArrowLeft") {
        x-=movimiento;
        
    } else {
        x+=movimiento;
    }
    posicion(x,y);
}
  
document.addEventListener("keydown", pulsarTecla);