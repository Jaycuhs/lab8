function initMap() {
	L.mapquest.key = '9YwDO916eeOxI56AzVslTbyVJk5Ig8sD';

	var map = L.mapquest.map('map', {
		center: [32.878781, -117.235947],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}