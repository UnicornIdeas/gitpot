export default {
  getKeyword: (state) => state.keyword,
  getFilters: (state) => state.filters,
  getElPerPage: (state) => state.elPerPage,
  getMaxPage: (state) => state.maxPage,
  getCurrentPage: (state) => state.currentPage,
  getElementsNumber: (state) => state.elNumber,
  getPageResults: (state) => state.pageResults
};
