const getDefaultState = () => ({
  layouts: [
    // { x: 0, y: 0, w: 4, h: 2, i: "Test1", id: 1 },
    // { x: 4, y: 0, w: 4, h: 4, i: "Test2", id: 2 },
    // { x: 8, y: 0, w: 4, h: 5, i: "Test3", id: 3 },
    // { x: 12, y: 0, w: 4, h: 3, i: "Test4", id: 4 },
    { x: 0, y: 0, w: 1, h: 1, i: "1" },
    { x: 1, y: 0, w: 1, h: 1, i: "2" },
    { x: 2, y: 0, w: 1, h: 1, i: "3" },
    { x: 3, y: 0, w: 1, h: 1, i: "4" },
  ],
  isEditLayout: true,
});

const getters = {};

// mutations type
export const SET_IS_EDIT_LAYOUT = "SET_IS_EDIT_LAYOUT";
export const SET_LAYOUTS = "SET_LAYOUTS";

const mutations = {
  [SET_IS_EDIT_LAYOUT](state, editStatus) {
    state.isEditLayout = editStatus;
  },
  [SET_LAYOUTS](state, newLayouts) {
    state.layouts = newLayouts;
  },
};

// action type
export const CHANGE_IS_EDIT_STATUS = "CHANGE_IS_EDIT_STATUS";

const actions = {
  [CHANGE_IS_EDIT_STATUS]({ state, commit }) {
    const { isEditLayout } = state;
    commit(SET_IS_EDIT_LAYOUT, !isEditLayout);
  },
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters,
  mutations,
  actions,
};
