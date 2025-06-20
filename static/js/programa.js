var map = L.map('map').setView([4.6280962154667735, -74.06584110194494], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Manejar el evento de hacer click en el mapa

var popup = L.popup();

function onMapClick(e) {
    popup
        var marker = L.marker(e.latlng).addTo(map);
}

map.on('click', onMapClick);