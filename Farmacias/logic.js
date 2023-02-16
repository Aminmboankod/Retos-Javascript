// https://infocaib.com/farmacies/listado.php
// https://infocaib.com/farmacies/listado.php?text=Palma
// https://infocaib.com/farmacies/listado-municipio.php
// https://infocaib.com/farmacies/listado-municipio.php?municipio=arta
// https://infocaib.com/farmacies/ficha.php?id=PM140


function ubicacion(id) {
    let elemento = document.getElementById('section');

    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {  
        cabecera = "<h1>Ubicación</h1>";
        document.getElementById("containerTable").innerHTML += cabecera;
        let data = JSON.parse(this.responseText);
        for(i=0;i<data.farmacies.length;i++) {

            if (data.farmacies[i].id == id) {
            document.getElementById("containerTable").innerHTML += "<h3>"+data.farmacies[i].id+"</h3><h3>"+data.farmacies[i].nom+"</h3><h3>"+data.farmacies[i].municipi+"</h3>"; 
            }
            
            mapa(data.farmacies[i].longitud, data.farmacies[i].latitud)

        }

    xhttp.open("GET", "https://infocaib.com/farmacies/ficha.php?id="+id);
    xhttp.send();

    }

}

function cargar() {

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {  
        cabecera = "<tr><th>ID</th><th>NOMBRE</th><th>MUNICIPIO</th>";
        document.getElementById("section").innerHTML += cabecera;
        let data = JSON.parse(this.responseText);
        for(i=0;i<data.farmacies.length;i++) {

            let id = data.farmacies[i].id
            
            document.getElementById("section").innerHTML += "<tr><td><button type='button' onclick='ubicacion("+id+")'>"+data.farmacies[i].id+"</button></td><td>"+data.farmacies[i].nom+"</td><td>"+data.farmacies[i].municipi+"</td>"; 
        }
        cierre = "</table>";
        document.getElementById("section").innerHTML += cierre;
    }
    xhttp.open("GET", "https://infocaib.com/farmacies/listado.php");
    xhttp.send();
}

function mapa(longitud, latitud) {
    var map = L.map('map').setView([longitud, latitud], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([longitud, latitud]).addTo(map)
                            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                            .openPopup();
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