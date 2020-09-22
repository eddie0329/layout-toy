import axios from "axios";

const getDefaultState = () => ({
  layouts: [
    // { x: 0, y: 0, w: 4, h: 2, i: "Test1", id: 1 },
    // { x: 4, y: 0, w: 4, h: 4, i: "Test2", id: 2 },
    // { x: 8, y: 0, w: 4, h: 5, i: "Test3", id: 3 },
    // { x: 12, y: 0, w: 4, h: 3, i: "Test4", id: 4 },
    { x: 0, y: 0, w: 24, minW: 24, h: 5, i: "LvupTv", id: 1 },
    { x: 0, y: 5, w: 24, minW: 24, h: 5, i: "UserBanner", id: 2 },
    { x: 0, y: 10, w: 12, minW: 12, h: 5, i: "RankingComponent", id: 3 },
    { x: 12, y: 10, w: 12, minW: 12, h: 5, i: "CurrentArenas", id: 4 },
  ],
  isEditLayout: true,
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
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters,
  mutations,
  actions,
};
