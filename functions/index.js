const admin = require("firebase-admin");
admin.initializeApp();

const qr=require("./queryregistry.js");

exports.queryregistry=qr.queryregistry;
