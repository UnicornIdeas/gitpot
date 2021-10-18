import { searchFirestore, queryFirestore } from '@/utils/firestore';

export default {
  searchFs(context) {
    if (context.state.loading === true) {
      return;
    }
    context.commit('updateLoading', true);

    const res = searchFirestore(context.state.keyword,
      context.state.currentPage,
      context.state.elPerPage);
    context.commit('updateElementsNumber', res.itemNumber);
    context.commit('updateMaxPage', res.maxPage);
    context.commit('updatePageResults', res.result);
    context.commit('updateLoading', false);
  },
  queryFs(context, payload) {
    if (context.state.loading === true) {
      return;
    }
    context.commit('updateLoading', true);

    const res = queryFirestore(context.state.keyword,
      payload.sortVariable,
      payload.sortType,
      context.state.filters,
      context.state.currentPage,
      context.state.elPerPage);
    context.commit('updateElementsNumber', res.itemNumber);
    context.commit('updateMaxPage', res.maxPage);
    context.commit('updatePageResults', res.result);
    context.commit('updateLoading', false);
  }
};
