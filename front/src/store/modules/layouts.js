const getDefaultState = () => ({
  layouts: [
    { x: 0, y: 0, w: 4, h: 2, i: "Test1", id: 1 },
    { x: 4, y: 0, w: 4, h: 4, i: "Test2", id: 2 },
    { x: 8, y: 0, w: 4, h: 5, i: "Test3", id: 3 },
    { x: 12, y: 0, w: 4, h: 3, i: "Test4", id: 4 },
  ],
  isEditLayout: true,
});

const getters = {};

// mutations type
export const SET_IS_EDIT_LAYOUT = "SET_IS_EDIT_LAYOUT";

const mutations = {
  [SET_IS_EDIT_LAYOUT](state, editStatus) {
    state.isEditLayout = editStatus;
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
