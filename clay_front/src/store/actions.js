import { searchFirestore, queryFirestore } from '@/utils/firestore';

export default {
  async searchFs(context) {
    if (context.state.loading === true) {
      return;
    }

    context.commit('clearPageResults');
    context.commit('updateElementsNumber', 0);

    let res = null;
    context.commit('updateLoading', true);
    try {
      const resp = await searchFirestore(
        context.state.keyword,
        context.state.currentPage,
        context.state.elPerPage
      );
      if (resp !== null) {
        res = resp;
      }
    } catch (err) {
      console.log(`error: ${err}`);
    } finally {
      context.commit('updateLoading', false);
    }

    if (res === null) {
      return;
    }

    context.commit('updateElementsNumber', res.itemNumber);
    context.commit('updatePageResults', res.result);
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
    context.commit('updatePageResults', res.result);
    context.commit('updateLoading', false);
  }
};
