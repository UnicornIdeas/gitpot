const admin = require("firebase-admin");
admin.initializeApp();

const qr=require("./queryregistry.js");

exports.queryregistry=qr.queryregistry;
// exports.scheduledFunction = functions.pubsub.schedule("every 5 seconds").onRun((context) => {
//   console.log("This will be run every 5 minutes!");
//   return null;
// });
