const admin = require("firebase-admin");
admin.initializeApp();

const qr=require("./queryregistry.js");
exports.queryregistry=qr.queryregistry;

const lm=require("./likemodel.js");
exports.likemodel=lm.likemodel;

const ct=require("./createtopic.js");
exports.createtopic=ct.createtopic;
