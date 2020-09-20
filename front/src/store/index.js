import Vuex from "vuex";
import Vue from "vue";
import layouts from "./modules/layouts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layouts,
  },
});
