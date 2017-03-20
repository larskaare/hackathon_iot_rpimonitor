var five = require("johnny-five");
var snapshot = require("./snapshot.js");
var azstorage = require("./azstorage");

var board = new five.Board({
	repl: false,
	debug: false
});

azstorage.azinit();

board.on("ready", function () {
	console.log("Board is ready");

	var led = new five.Led(9);
	var button = new five.Button({
		pin: 7,
		invert: true
	});
	var temp = new five.Thermometer({
		controller: "DS18B20",
		pin: 2
	});
	var motion = new five.Motion(8);

	led.off();

	button.on("press", function () {
		led.on();
		console.log("Temperature " + temp.celsius + "C");
	});

	button.on("release", function () {
		led.off();
	});

	motion.on("calibrated", function () {
		console.log("Motion calibrated");
	});

	motion.on("motionstart", function () {
		console.log("Motion detected");
		led.on();

		var timestamp = Date.now();
		var fname = "/tmp/" + timestamp + "_snapshot";
		var sname = timestamp + "_snapshot";

		snapshot.takeSnapshot(fname, function callback(err) {
			if (err) {
				console.log('Unable to take camera snapshot ', err);
			} else {
				azstorage.sendsnaptoaz(fname, sname);
			};
		});

	});

	motion.on("motionend", function () {
		console.log("Motion ended");
		led.off();
	});

});
