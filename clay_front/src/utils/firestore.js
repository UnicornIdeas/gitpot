import 'firebase/compat/firestore';
import * as ElasticAppSearch from '@elastic/app-search-javascript';

const esClient = ElasticAppSearch.createClient({
  searchKey: 'search-ii52gwnvddymy5gsbrg25o4b',
  endpointBase: 'https://clay-netw.ent.us-central1.gcp.cloud.es.io',
  engineName: 'models-search'
});

const options = {
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
    }
  }
};

const results = [];

export function searchFirestore(keyword, pageNumber) {
  const pageOptions = { current: pageNumber, size: 15 };
  options.page = pageOptions;
  results.length = 0;
  esClient
    .search(keyword, options)
    .then((resultList) => {
      const res = { items: resultList.info.meta.page.total_results, result: [] };
      resultList.results.forEach((resultItem) => {
        res.result.push(resultItem.data);
      });
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(`error: ${error}`);
    });
}
export function queryFirestore(keyword, sortVariable, type, filters, pageNumber) {
  if (sortVariable === 'downloads') {
    const sortOptions = [{ downloads: type }];
    options.sort = sortOptions;
  } else {
    const sortOptions = [{ likes: type }];
    options.sort = sortOptions;
  }
  const filterOptions = { tags: filters };
  options.filters = filterOptions;
  const pageOptions = { current: pageNumber, size: 15 };
  options.page = pageOptions;

  results.length = 0;
  esClient
    .search(keyword, options)
    .then((resultList) => {
      const res = { items: resultList.info.meta.page.total_results, result: [] };
      resultList.results.forEach((resultItem) => {
        res.result.push(resultItem.data);
      });
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(`error: ${error}`);
    });
}

searchFirestore('identity');
// const sp = 'downloads';
// const t = 'desc';
// const f = ['NATIVE', 'JS', 'REACT'];
// queryFirestore(sp, t, f);
