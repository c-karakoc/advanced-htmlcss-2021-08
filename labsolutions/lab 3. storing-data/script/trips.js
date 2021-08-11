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
