var DocumentClient = require('documentdb').DocumentClient;
var Guid = require('guid');

var host = process.env.AZURE_DOCUMENTDB_HOST;
var masterKey = process.env.AZURE_DOCUMENTDB_MASTERKEY;

var client = new DocumentClient(host, { masterKey: masterKey });

var databaseName = 'climate';
var collectionName = 'temperatures';

var databaseDefinition = { id: databaseName };
var collectionDefinition = { id: collectionName };

function initDB() {
	client.createDatabase(databaseDefinition, function (err, database) {
		if (err) return console.log("Create documentDB :", err);
		console.log('Azure document db is available');

		client.createCollection(database._self, collectionDefinition, function (err, collection) {
			if (err) return console.log("Create collection :", err);
			console.log('Azure document collection is available');
		});
	});
};
exports.initDB = initDB;

function getCollectionLink(callback) {

	var collLink = 'dbs/' + databaseName + '/colls/' + collectionName;
	client.readCollection(collLink, function (err, coll) {
		if (err) {
			console.log("Get collection link : ", err);
		} else {
			callback(coll);
		}
	});
}

function storeDocument(deviceID, temp) {

	getCollectionLink(function (cb) {

		var id = Guid.create();

		var documentDefinition = {
			"id": id.value,
			"device": deviceID,
			"temperature": temp
		};

		console.log("Doc", documentDefinition);

		client.createDocument(cb._self, documentDefinition, function (err, document) {
			if (err) return console.log("Create document error: ", err);
			console.log('Created Document with id: ', document.id);
		});

	});
};
exports.storeDocument = storeDocument;