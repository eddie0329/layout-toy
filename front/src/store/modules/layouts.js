import axios from "axios";

const getDefaultState = () => ({
  layouts: [
    { x: 0, y: 0, w: 24, minW: 24, h: 5, i: "UserBanner", id: 2 },
    { x: 0, y: 5, w: 24, minW: 24, h: 5, i: "LvupTv", id: 1 },
    { x: 0, y: 10, w: 12, minW: 12, h: 5, i: "RankingComponent", id: 3 },
    { x: 12, y: 10, w: 12, minW: 12, h: 5, i: "CurrentArenas", id: 4 },
  ],
  isEditLayout: true,
  isLive: false,
  ranking: [],
});

const getters = {};

// mutations type
export const SET_IS_EDIT_LAYOUT = "SET_IS_EDIT_LAYOUT";
export const SET_LAYOUTS = "SET_LAYOUTS";
export const ADD_COMPONENT = "ADD_COMPONENT";
export const DELETE_COMPONENT = "DELETE_COMPONENT";
export const INIT_RANKING = "INIT_RANKING";
export const SET_RANKING = "SET_RANKING";

const mutations = {
  [SET_IS_EDIT_LAYOUT](state, editStatus) {
    state.isEditLayout = editStatus;
  },
  [SET_LAYOUTS](state, newLayouts) {
    state.layouts = newLayouts;
  },
  [ADD_COMPONENT](state) {
    state.layouts.unshift({ x: 0, y: 0, w: 24, h: 5, i: "Test" });
  },
  [DELETE_COMPONENT](state, id) {
    state.layouts = state.layouts.filter((layout) => layout.id !== id);
  },
  [INIT_RANKING](state) {
    Object.entries(getDefaultState()).forEach(([key, value]) => {
      if (key === "ranking") {
        state.ranking = value;
      }
    });
  },
  [SET_RANKING](state, newRanking) {
    state.ranking = newRanking;
  },
};

// action type
export const CHANGE_IS_EDIT_STATUS = "CHANGE_IS_EDIT_STATUS";
export const GET_RANKINGS = "GET_RANKINGS";
export const CHANGE_TV_LIVE = "CHANGE_TV_LIVE";

const actions = {
  [CHANGE_IS_EDIT_STATUS]({ state, commit }) {
    const { isEditLayout } = state;
    commit(SET_IS_EDIT_LAYOUT, !isEditLayout);
  },
  async [GET_RANKINGS]({ commit }) {
    const response = await axios.get("http://localhost:3000/");
    const { ranking } = response.data;
    commit(SET_RANKING, ranking);
  },
  [CHANGE_TV_LIVE]({ state }) {
    const { layouts } = state;
    const indexOfTv = layouts.findIndex((layout) => layout.i === "LvupTv");
    const spliced = layouts.splice(indexOfTv, 1);
    spliced[0].x = 0;
    spliced[0].y = 0;
    layouts.unshift(spliced[0]);
  },
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters,
  mutations,
  actions,
};
