function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 52.271041,
            lng: -9.700372,
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        {lat: 50.785091, lng: -13.968285},
        {lat: 51.084045, lng: -13.874245},
        {lat: 50.754932, lng: -13.984016},
    ];
    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerClusterer = MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}