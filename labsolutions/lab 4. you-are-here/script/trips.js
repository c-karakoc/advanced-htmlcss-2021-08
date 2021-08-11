function addTrip() {
	let trips = [];
	if (localStorage["trips"]) {
		trips = JSON.parse(localStorage["trips"]);
	}

	let newTrip = {
		location: document.querySelector("#input-location").value,
		when: document.querySelector("#input-when").value,
		rating: +document.querySelector("#input-rating").value,
		reason: document.querySelector("#input-reason").value,
	};
	trips.push(newTrip);
	localStorage["trips"] = JSON.stringify(trips);
}

function loadTrips() {
	if (!localStorage["trips"]) {
		return;
	}

	let trips = JSON.parse(localStorage["trips"]);
	let template = document.querySelector("#trip-template").content;

	for (let trip of trips) {
		let newTrip = template.cloneNode(true); // true = deep clone
		newTrip.querySelector(".city").innerText = trip.location;
		newTrip.querySelector("time").innerText = trip.when;
		newTrip.querySelector(".review").innerText = trip.reason;

		let meter = newTrip.querySelector("meter");
		meter.setAttribute("value", trip.rating);
		meter.innerText = trip.rating;

		document.querySelector("#trips").appendChild(newTrip);
	}
}

function displayLocation() {
	navigator.geolocation.getCurrentPosition(success, failure);

	function success(position) {
		let { latitude: lat, longitude: long } = position.coords;

		new ol.Map({
			target: "map",
			layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
			view: new ol.View({
				center: ol.proj.fromLonLat([long, lat]),
				zoom: 13,
			}),
		});
	}

	function failure(error) {
		let errorEl = document.querySelector("#location-error");
		errorEl.removeAttribute("hidden");
		errorEl.innerText += error.message;
	}
}
