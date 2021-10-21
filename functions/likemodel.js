const functions = require("firebase-functions");
const admin = require("firebase-admin");

const region="europe-central2";


exports.likemodel = functions
    .region(region)
    .https.onCall(async (data, context) => {
      console.log(data);
      console.log(context.auth);
      if (context.auth===undefined) {
        return {"error": "not authenticated"};
      }

      const uid=context.auth.uid || null;
      if (uid===null) {
        return {"error": "not user id"};
      }

      const model=data.model||null;
      if (model===null) {
        return {"error": "not model name"};
      }

      const likeRef = admin
          .firestore()
          .collection("users")
          .doc(uid)
          .collection("liked_models")
          .doc(model);

      let exists=false;
      try {
        const docsnap=await likeRef.get();
        exists=docsnap.exists;
      } catch (err) {
        throw new functions.https.HttpsError("internal", "error querying user info");
      }

      const batch=admin.firestore().batch();
      const modelref=admin
          .firestore()
          .collection("models")
          .doc(model);

      if (exists===true) {
        batch.update(modelref, {"likes": admin.firestore.FieldValue.increment(-1)});
        batch.delete(likeRef);
      } else {
        batch.update(modelref, {"likes": admin.firestore.FieldValue.increment(1)});
        batch.set(likeRef, {});
      }

      try {
        await batch.commit();
      } catch (err) {
        console.log(err);
        throw new functions.https.HttpsError("internal", "error liking model");
      }

      return "ok";
    });
