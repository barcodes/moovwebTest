function doLocation(pos) {
	if (pos) {
	    window.geolocationObject = {
	        latitude: pos.coords.latitude,
	        longitude: pos.coords.longitude,
	        specialty: false
	    }
	} else {
		window.geolocationObject = {
			country: 'US'
		}
	}
    callLocationLookup();
    google.maps.event.trigger(window, 'load');
};

doLocation();
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(doLocation);
}
