<template>
  <div id="app">
    <div v-if="isEditLayout">
      <grid-layout
        style="background: blue;"
        :layout.sync="layouts"
        :col-num="24"
        :row-height="30"
        :is-draggable="isEdit"
        :is-resizable="isEdit"
        :vertical-compact="true"
        :margin="[10, 10]"
        @layout-updated="updateLayout"
      >
        <grid-item
          v-for="item in layouts"
          :key="item.id"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
        >
          <div style="float: right; margin: 5px;">X</div>
          <component :is="item.i"></component>
        </grid-item>
      </grid-layout>
      <button @click="onClickEdit">CREATE</button>
    </div>
    <template v-else>
      <created-layout></created-layout>
      <button @click="changeIsEditStatus">EDIT</button>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { CHANGE_IS_EDIT_STATUS, SET_LAYOUTS } from "./store/modules/layouts";
import VueGridLayout from "vue-grid-layout";
import CreatedLayout from "./components/CreatedLayout";

export default {
  name: "App",
  data() {
    return {
      isEdit: true,
    };
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    CreatedLayout,
    LvupTv: () => import("./components/LvupTv"),
    CurrentArenas: () => import("./components/CurrentArenas"),
    RankingComponent: () => import("./components/RankingComponent"),
    UserBanner: () => import("./components/UserBanner"),
  },
  computed: {
    ...mapState("layouts", ["layouts", "isEditLayout"]),
  },
  methods: {
    ...mapActions("layouts", {
      changeIsEditStatus: CHANGE_IS_EDIT_STATUS,
    }),
    ...mapMutations("layouts", {
      setLayouts: SET_LAYOUTS,
    }),
    updateLayout(newLayout) {
      this.setLayouts(newLayout);
    },
    onClickEdit() {
      this.isEdit = !this.isEdit;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
