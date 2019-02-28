// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
	initCamera();
	initMap();
	initGestures();
	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function () {
		$(".judge-img").bind("taphold", tapholdHandler);
		function tapholdHandler(event) {
			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);
			$('#' + targetIDPrefix + "-bio").show();
		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
	// add your code here
	$('#rsvpForm').submit(function (e) {
		e.preventDefault();
		console.log("submitting form ...")
		var rsvpEmail = $('#rsvpEmail').val();
		$.post('addRSVP', { rsvpEmail: rsvpEmail }, postCallback);
	});
	function postCallback(res) {
		alert("rsvp form successfully submitted");
		$('#rsvpEmail').val(''); // clear form
	}
}

function initMap() {
	L.mapquest.key = 'pQAvg8uiMeOzAutnlmrCdvv20eqjzAYG';
	var map = L.mapquest.map('map', {
		center: [32.878916, - 117.235909],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.235861]).addTo(map);
}

$(function () {
	$("div.box").bind("taphold", tapholdHandler);
	function tapholdHandler(event) {
		$(event.target).addClass("taphold");
	}
});
