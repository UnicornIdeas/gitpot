export default {
  getKeyword: (state) => state.keyword,
  getFilters: (state) => state.filters,
  getElPerPage: (state) => state.elPerPage,
  getCurrentPage: (state) => state.currentPage,
  getElementsNumber: (state) => state.elNumber,
  getPageResults: (state) => state.pageResults,

  getModel(state, keyword) {
    state.pageResults.forEach((res) => {
      if (res.name.raw === keyword) {
        return res;
      }
      return false;
    });
    return null;
  }
};
