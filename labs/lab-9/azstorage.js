var azure = require('azure-storage');

var fileService = azure.createFileService();

var sharename = "iothacklksk";
var directory = "snapshots";

function azinit() {
	fileService.createShareIfNotExists(sharename, function (error, result, response) {
		if (!error) {
			fileService.createDirectoryIfNotExists(sharename, directory, function (error, result, response) {
				if (!error) {
					console.log("Azure share and directory for snapshots are available");
				};
			});
		}
	});
};
exports.azinit = azinit;

function sendsnaptoaz(fname, sname) {
	console.log("saving " + fname + " to azure");
	fileService.createFileFromLocalFile(sharename, directory, sname, fname, function (error, result, response) {
		if (!error) {
			console.log(fname + " uploaded to Azure Storage");
		} else {
			console.log("Unable to upload " + fname + " to Azure");
		};
	});
};
exports.sendsnaptoaz = sendsnaptoaz;


