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

// interogare simpla firestore dupa keyword
export async function searchFirestore(keyword, pageNumber, elPerPage) {
  const opt = { ...options };
  opt.page = { current: pageNumber, size: elPerPage };

  const res = {};
  try {
    const resultList = await esClient.search(keyword, opt);
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

export function queryFirestore(keyword, sortVariable, type, filters, pageNumber, elPerPage) {
  if (sortVariable === 'downloads') {
    const sortOptions = [{ downloads: type }];
    options.sort = sortOptions;
  } else {
    const sortOptions = [{ likes: type }];
    options.sort = sortOptions;
  }
  if (filters.length !== 0) {
    const filterOptions = { tags: filters };
    options.filters = filterOptions;
  }
  const pageOptions = { current: pageNumber, size: elPerPage };
  options.page = pageOptions;

  esClient
    .search(keyword, options)
    .then((resultList) => {
      const res = {
        itemsNumber: resultList.info.meta.page.total_results,
        maxPage: resultList.info.meta.page.total_pages,
        result: []
      };
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

// searchFirestore('identity');
// const sp = 'downloads';
// const t = 'desc';
// const f = ['NATIVE', 'JS', 'REACT'];
// queryFirestore(sp, t, f);
