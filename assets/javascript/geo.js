var geolocationObject;

var doLocation = function(pos) {
    geolocationObject = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        specialty: false
    }
};
if( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(doLocation);
}