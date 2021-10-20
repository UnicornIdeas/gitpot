export default {
  getKeyword: (state) => state.keyword,
  getFilters: (state) => state.filters,
  getElPerPage: (state) => state.elPerPage,
  getCurrentPage: (state) => state.currentPage,
  getElementsNumber: (state) => state.elNumber,
  getPageResults: (state) => state.pageResults,
  getModel: (state) => (keyword) => {
    console.log(keyword);
    console.log(state);
    state.pageResults.forEach((res) => {
      console.log(res.name);
      if (res.name.raw === keyword) {
        return res;
      }
    });
    return null;
  }
};
