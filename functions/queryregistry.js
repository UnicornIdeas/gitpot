const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios").default;

const region="europe-central2";
const registryURL="https://raw.githubusercontent.com/ceramicstudio/datamodels/main/INDEX.md";

exports.queryregistry = functions
    .region(region)
    .https.onCall(async (data, context) => {
      let registryContent=null;
      try {
        const resp=await axios.get(registryURL);
        if (resp.status===200 && resp.data!==null && resp.data!==undefined && resp.data.length!==0) {
          registryContent=resp.data;
        }
      } catch (err) {
        console.log(`error downloading registry ${err}`);
        return;
      }

      if (registryContent===null) {
        return;
      }

      const lines=registryContent.split("\n");
      if (lines.length<5) {
        return;
      }

      for (let i=4; i<lines.length; i++) {
        if (lines[i].length===0) {
          continue;
        }

        let line=lines[i].slice(1, lines[i].length-1);
        line=line.trim();
        const blocks=line.split("|");
        const modelData=getModelNameAndURL(blocks[0]);
        modelData["description"]=blocks[1].trim();
        insertModel(modelData);
      }

      return;
    });

function getModelNameAndURL(str) {
  const nameUrlpath=str.trim().split("]");
  const name=nameUrlpath[0].slice(2, nameUrlpath[0].length-1);
  const urlpath=nameUrlpath[1].slice(1, nameUrlpath[1].length-1);
  return {
    name: name,
    urlpath: urlpath,
  };
}

async function insertModel(model) {
  const modelRef = admin.firestore().collection("models").doc(model.name);
  const doc = await modelRef.get();

  if (!doc.exists) {
    modelRef.set(
        {
          urlpath: model.urlpath,
          description: model.description,
        },
        {
          merge: true,
        },
    );
  }
}
