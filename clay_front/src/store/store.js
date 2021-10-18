import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);
Vue.config.productionTip = false

export default new Vuex.Store({
  state: {
    keyword: '',
    filters: Array(),
    elPerPage: 15,
    currentPage: 1,
    maxPage: 1,
    elNumber: 0,
    pageResults: Array(),
    loading: false,
  },
  getters: getters,
  mutations: mutations,
  actions: actions
});
