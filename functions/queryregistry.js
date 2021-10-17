const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios").default;

const region="europe-central2";
const registryURL = "https://raw.githubusercontent.com/ceramicstudio/datamodels/main/INDEX.md";


exports.queryregistry = functions
    .region(region)
    .pubsub
    .schedule("every 4 hours")
    .onRun(async (context) => {
    // .https.onCall(async (data, context) => {
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

  const metadataURL = `https://registry.npmjs.com/-/v1/search?text=@datamodels/${model.name}&size=1`;

  let date = "";
  let version = "";
  let links = {};
  let author = "";
  let publisher = {};
  try {
    const resp = await axios.get(metadataURL);
    if (resp.status === 200 && resp.data !== null && resp.data !== undefined && resp.data.length !== 0) {
      const pack = resp.data.objects[0].package;
      date = pack.date;
      version = pack.version;
      links = pack.links;
      author = pack.author.name;
      publisher = pack.publisher;
    }
  } catch (err) {
    console.log(`error downloading metadata ${err}`);
    return;
  }

  const now=new Date().toISOString().split("T")[0];
  const downloadsURL=`https://api.npmjs.org/downloads/point/2015-01-01:${now}/@datamodels/${model.name}`;
  let downloadsresp=null;
  try {
    const resp = await axios.get(downloadsURL);
    if (resp.status === 200 && resp.data !== null && resp.data !== undefined && resp.data.length !== 0) {
      downloadsresp=resp.data.downloads;
    }
  } catch (err) {
    console.log(`error downloading downloads number ${err}`);
    return;
  }

  let githubuser="";
  try {
    const resp=await axios.get(`https://npmjs.com/~${publisher.username}`);
    if (resp.status === 200 && resp.data !== null && resp.data !== undefined && resp.data.length !== 0) {
      const githubTokens=resp.data.split("\"github\":\"");
      if (githubTokens.length>1) {
        const gitName=githubTokens[1].split("\"");
        githubuser=gitName[0];
      }
    }
  } catch (err) {
    console.log(`error downloading github user info ${err}`);
    return;
  }


  if (!doc.exists) {
    modelRef.set(
        {
          name: model.name,
          urlpath: model.urlpath,
          description: model.description,
          date: date,
          version: version,
          links: links,
          author: author,
          publisher: publisher,
          downloads: downloadsresp,
          likes: 0,
          githubuser: githubuser,
        },
        {
          merge: true,
        },
    );
  } else {
    modelRef.update(
        {
          date: date,
          version: version,
          downloads: downloadsresp,
          githubuser: githubuser,
        },
    );
  }
}
