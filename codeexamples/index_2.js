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

	led.off();

	button.on("press", function() {
		led.on();
	});

	button.on("release", function() {
		led.off();
	});

});