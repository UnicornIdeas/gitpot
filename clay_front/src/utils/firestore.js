import { getApp } from 'firebase/app';
import * as ElasticAppSearch from '@elastic/app-search-javascript';
import {
  getFirestore, collection, query, getDocs, getDoc, doc
} from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';

const esClient = ElasticAppSearch.createClient({
  searchKey: 'search-ii52gwnvddymy5gsbrg25o4b',
  endpointBase: 'https://clay-netw.ent.us-central1.gcp.cloud.es.io',
  engineName: 'models-search'
});

const baseOptions = {
  search_fields: {
    name: {},
    description: {}
  },
  result_fields: {
    author: {
      raw: {}
    },
    githubuser: {
      raw: {}
    },
    links: {
      raw: {}
    },
    publisher: {
      raw: {}
    },
    date: {
      raw: {}
    },
    urlpath: {
      raw: {}
    },
    downloads: {
      raw: {}
    },
    name: {
      raw: {}
    },
    description: {
      raw: {}
    },
    tags: {
      raw: {}
    },
    likes: {
      raw: {}
    },
    version: {
      raw: {}
    },
    proposals: {
      raw: {}
    },
  }
};

// interogare simpla elastic dupa keyword
export async function searchFirestore(keyword, pageNumber, elPerPage) {
  const options = { ...baseOptions };
  options.page = { current: pageNumber, size: elPerPage };

  const res = {};
  try {
    const resultList = await esClient.search(keyword, options);
    if (resultList !== null) {
      const result = [];
      resultList.results.forEach((resultItem) => {
        result.push(resultItem.data);
      });
      res.itemsNumber = resultList.info.meta.page.total_results;
      res.result = result;
    }
  } catch (error) {
    console.log(`error interogating elastic: ${error}`);
  }
  return res;
}

// filtrare si interogare elastic
export async function queryFirestore(keyword, sortVariable, filters, pageNumber, elPerPage) {
  const options = { ...baseOptions };

  switch (sortVariable) {
    case 'likes ascending': {
      options.sort = [{ likes: 'asc' }];
      break;
    }
    case 'likes descending': {
      options.sort = [{ likes: 'desc' }];
      break;
    }
    case 'downloads ascending': {
      options.sort = [{ downloads: 'asc' }];
      break;
    }
    case 'downloads descending': {
      options.sort = [{ downloads: 'desc' }];
      break;
    }
    default: {
      //
    }
  }

  if (filters.length !== 0) {
    options.filters = { tags: filters };
  }
  options.page = { current: pageNumber, size: elPerPage };

  const res = {};
  try {
    let kwd = '';
    if (keyword !== null) {
      kwd = keyword;
    }
    const resultList = await esClient.search(kwd, options);
    if (resultList !== null) {
      const result = [];
      resultList.results.forEach((resultItem) => {
        result.push(resultItem.data);
      });
      res.itemNumber = resultList.info.meta.page.total_results;
      res.result = result;
    }
  } catch (error) {
    console.log(`error interogating elastic: ${error}`);
  }
  return res;
}

// intoarce tagurile din firestore
export async function getTags() {
  const app = getApp();
  const db = getFirestore(app);
  const q = query(collection(db, 'tags'));

  const querySnapshot = await getDocs(q);
  const res = [];
  querySnapshot.forEach((docc) => {
    res.push(docc.id);
  });
  return res;
}

// returns all comments from a topic
export async function getComments(id) {
  const app = getApp();
  const db = getFirestore(app);
  const q = query(collection(db, 'proposals', id, 'comments'));
  const querySnapshot = await getDocs(q);
  const res = [];
  querySnapshot.forEach((docc) => {
    res.push(docc.data());
  });
  return res;
}

// adauga like unui model
export async function likeModel(modelid) {
  const app = getApp();
  const functions = getFunctions(app, 'europe-central2');
  const likem = httpsCallable(functions, 'likemodel');
  likem({ model: modelid })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// verifica daca a dat like unui model
export async function likedbyme(modelid, userid) {
  const app = getApp();
  const db = getFirestore(app);
  const likedref = doc(db, `/users/${userid}/liked_models/${modelid}`);
  const q = query(likedref);
  const querySnapshot = await getDoc(q);
  return querySnapshot.exists();
}
