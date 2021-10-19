import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

Vue.use(Vuex);
Vue.config.productionTip = false;

export default new Vuex.Store({
  state: {
    keyword: '',
    elPerPage: 15,
    currentPage: 1,
    elNumber: 0,
    pageResults: [],
    loading: false,
    tags: [],
    selectedFilters: [],
    sorttype: '',
  },
  getters,
  mutations,
  actions
});
