export default {
  updateKeyword(state, payload) {
    state.keyword = payload;
  },
  updateFilters(state, payload) {
    state.filters = payload;
  },
  clearFilters(state) {
    state.filters = [];
  },
  changeElPerPage(state, payload) {
    state.elPerPage = payload;
  },
  previousPage(state) {
    if (state.currentPage !== 1) {
      state.currentPage -= 1;
    }
  },
  resetPage(state) {
    state.currentPage = 1;
  },
  updateElementsNumber(state, payload) {
    state.elNumber = payload;
  },
  resetElementsNumber(state) {
    state.elNumber = 0;
  },
  updatePageResults(state, payload) {
    state.pageResults = payload;
  },
  clearPageResults(state) {
    state.pageResults.splice(0);
  },
  updateLoading(state, payload) {
    state.loading = payload;
  },
  addtags(state, taglist) {
    state.tags = taglist;
  },
  setFilters(state, filters) {
    state.selectedFilters.splice(0);
    state.selectedFilters = filters;
  },
  setSortType(state, sortT) {
    state.sorttype = sortT;
  }
};
