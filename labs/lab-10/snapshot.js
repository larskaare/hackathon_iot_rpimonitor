var child_process = require('child_process');

function takeSnapshot(fname, cb) {

    var args = ['-o', fname, '--nopreview'];
    var spawn = child_process.spawn('raspistill', args);

    spawn.on('exit', function (code) {
        console.log('A snapshot was save as ' + fname + ' with exit code, ' + code);
        cb();
    });
}
exports.takeSnapshot = takeSnapshot;
