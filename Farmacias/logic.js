// https://infocaib.com/farmacies/listado.php
// https://infocaib.com/farmacies/listado.php?text=Palma
// https://infocaib.com/farmacies/listado-municipio.php
// https://infocaib.com/farmacies/listado-municipio.php?municipio=arta
// https://infocaib.com/farmacies/ficha.php?id=PM140


function cargar() {

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {  
        cabecera = "<tr><th>ID</th><th>NOMBRE</th><th>MUNICIPIO</th>";
        document.getElementById("section").innerHTML += cabecera;
        let data = JSON.parse(this.responseText);
        for(i=0;i<data.farmacies.length;i++) {
            document.getElementById("section").innerHTML += "<tr><td>"+data.farmacies[i].id+"</td><td>"+data.farmacies[i].nom+"</td><td>"+data.farmacies[i].municipi+"</td>"; 
        }
        cierre = "</table>";
        document.getElementById("section").innerHTML += cierre;
    }
    xhttp.open("GET", "https://infocaib.com/farmacies/listado.php");
    xhttp.send();
}


function municipios() {

    let elemento = document.getElementById('section');

    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
    let nombre = document.getElementById("busqueda").value;
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {  
        cabecera = "<tr><th> ID </th><th> NOMBRE </th><th> MUNICIPIO </th>";
        document.getElementById("section").innerHTML += cabecera;
        let data = JSON.parse(this.responseText);
        for(i=0;i<data.farmacies.length;i++) {
            document.getElementById("section").innerHTML += "<tr><td>"+data.farmacies[i].id+"</td><td>"+data.farmacies[i].nom+"</td><td>"+data.farmacies[i].municipi+"</td>"; 
        }
        cierre = "</table>";
        document.getElementById("section").innerHTML += cierre;
    }
    xhttp.open("GET", "https://infocaib.com/farmacies/listado-municipio.php?municipio="+nombre);
    xhttp.send();
}
