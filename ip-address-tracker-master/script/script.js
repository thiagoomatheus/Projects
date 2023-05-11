var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<span style="font-size: 12px;">&copy; <a href="http://www.openstreetmap.org/copyright" style="font-size: 12px;">OpenStreetMap</a></span>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);