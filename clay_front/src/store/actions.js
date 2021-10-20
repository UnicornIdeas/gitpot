import { searchFirestore, queryFirestore, getTags } from '@/utils/firestore';

export default {
  gettags(context) {
    if (context.state.tags.length !== 0) {
      return;
    }

    getTags()
      .then((taglist) => {
        context.commit('addtags', taglist);
      })
      .catch((err) => { console.log(`error downloading tags ${err}`); });
  },

  // search simplu elastic search
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

  // query elastic search
  async queryFs(context) {
    if (context.state.loading === true) {
      return;
    }

    context.commit('clearPageResults');

    let res = null;
    context.commit('updateLoading', true);
    try {
      const resp = await queryFirestore(
        context.state.keyword,
        context.state.sorttype,
        context.state.selectedFilters,
        context.state.pagination.page,
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
    context.commit('updateLoading', false);
  }
};
