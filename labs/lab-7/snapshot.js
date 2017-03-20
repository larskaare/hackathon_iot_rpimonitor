var child_process = require('child_process');

function takeSnapshot(cb) {
    var timestamp = Date.now();
    var filename = "/tmp/" + timestamp + "_snapshot";

    var args = ['-o', filename, '--nopreview'];
    var spawn = child_process.spawn('raspistill', args);

    spawn.on('exit', function(code) {
        console.log('A snapshot was save as ' + filename + ' with exit code, ' + code);
    });

}
exports.takeSnapshot = takeSnapshot;