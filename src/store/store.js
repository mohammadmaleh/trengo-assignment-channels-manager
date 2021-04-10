import Vue from "vue";
import Vuex from "vuex";

import channels from "./modules/channels";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    channels,
  },
});
