var five = require("johnny-five");

var board = new five.Board({
	repl: false,
	debug: false
	});

board.on("ready", function() {

	var led = new five.Led(9);

	led.on();

});