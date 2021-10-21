const functions = require("firebase-functions");
const admin = require("firebase-admin");

const region="europe-central2";

exports.createtopic = functions
    .region(region)
    .https.onCall(async (data, context) => {
      if (context.auth===undefined) {
        return {"error": "not authenticated"};
      }

      const uid=context.auth.uid || null;
      if (uid===null) {
        return {"error": "not user id"};
      }

      const topic=data.topic||null;
      if (topic===null || topic.length===0) {
        return {"error": "no topic"};
      }

      const message=data.message||null;
      if (message===null || message.length===0) {
        return {"error": "no messasge"};
      }

      const model=data.model||null;
      if (model===null) {
        return {"error": "no model"};
      }

      const time= admin.firestore.FieldValue.serverTimestamp();

      let topicref=null;
      try {
        topicref = await admin
            .firestore()
            .collection("proposals")
            .add({
              ownerid: uid,
              ownername: context.auth.token.name,
              title: topic,
              content: message,
              creation: time,
              comments: 0,
              likes: 0,
            });
      } catch (err) {
        console.log(err);
        throw new functions.https.HttpsError("internal", "error creating topic");
      }

      if (topicref===null) {
        return {"error": "error creating topic"};
      }

      const topicid=topicref.id;
      const modelref=admin
          .firestore()
          .collection("models")
          .doc(model);

      return admin.firestore().runTransaction((t)=>{
        return t.update(modelref, {
          proposals: admin.firestore.FieldValue.arrayUnion({
            author: context.auth.token.name,
            authorid: uid,
            id: topicid,
            title: topic,
            comments: 0,
            likes: 0,
          })});
      }).then(() => {
        console.log("Transaction successfully committed!");
        return "ok";
      }).catch((error) => {
        console.log("Transaction failed: ", error);
        throw new functions.https.HttpsError("internal", "error creating topic");
      });


      //   catch (err) {
      //     console.log(err);
      //     throw new functions.https.HttpsError("internal", "error creating topic");
    });
