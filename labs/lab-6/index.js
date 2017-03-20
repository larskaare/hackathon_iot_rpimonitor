var five = require("johnny-five");

var board = new five.Board({
	repl: false,
	debug: false
	});

board.on("ready", function() {
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

	led.off();

	button.on("press", function() {
		led.on();
		console.log("Temperature " + temp.celsius + "C");
	});

	button.on("release", function() {
		led.off();
	});

});