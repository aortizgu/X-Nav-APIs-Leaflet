$(document).ready(function() {
    var mymap = L.map('mapid').locate({
        setView: true,
        maxZoom: 19
    });
    L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap)

    L.marker([40.2838, -3.8215]).addTo(mymap)
        .bindPopup('UNIVERSIDAD URJC')
        .openPopup();

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    mymap.on('click', onMapClick);

    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(mymap)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        L.circle(e.latlng, radius).addTo(mymap);
    }

    mymap.on('locationfound', onLocationFound);
});
