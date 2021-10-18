export default {
    getKeyword: state => {
        return state.keyword;
    },
    getFilters: state => {
        return state.filters;
    },
    getElPerPage: state => {
        return state.elPerPage;
    },
    getMaxPage: state => {
        return state.maxPage;
    },
    getCurrentPage: state => {
        return state.currentPage;
    },
    getElementsNumber: state => {
        return state.elNumber;
    },
    getPageResults: state => {
        return state.pageResults;
    }
}