/* Mapa*/

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<span style="font-size: 12px;">&copy; <a href="http://www.openstreetmap.org/copyright" style="font-size: 12px;">OpenStreetMap</a></span>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

/* Fim Mapa*/

let inputIp = document.querySelector("#ip")

function validateIp(input) {
    let ipString = input.split('.');
    console.log(ipString);
    let ip = ipString.map(Number);
    console.log(ip);
    if (ip.length != 4 || ip[0] < 0 || ip[0] > 255 || ip[1] < 0 || ip[1] > 255 || ip[2] < 0 || ip[2] > 255 || ip[3] < 0 || ip[3] > 255) {
        return false
    }
    else {
        return true
    }
}