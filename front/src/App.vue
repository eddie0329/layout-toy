<template>
  <div id="app">
    <div v-if="isEditLayout">
      <grid-layout
        style="background: blue;"
        :layout.sync="_layouts"
        :col-num="24"
        :row-height="30"
        :is-draggable="isEdit"
        :is-resizable="isEdit"
        :vertical-compact="true"
        :margin="[10, 10]"
        @layout-updated="updateLayout"
      >
        <grid-item
          v-for="item in _layouts"
          :key="item.id"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :min-w="item.minW"
          :i="item.i"
        >
          <component :is="item.i" :is-edit="isEdit"></component>
          <div v-if="isEdit" @click="onClickDelete(item.id)" class="delete-btn">X</div>
        </grid-item>
      </grid-layout>
      <button v-if="isEdit" @click="onClickEdit">CREATE</button>
      <button v-else @click="onClickEdit">EDIT</button>
      <button v-if="isEdit" @click="addComponent">ADD</button>
      <button v-else @click="changeTvLive">LIVE STREAM!</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import {
  CHANGE_IS_EDIT_STATUS,
  SET_LAYOUTS,
  ADD_COMPONENT,
  DELETE_COMPONENT,
  INIT_RANKING,
  GET_RANKINGS,
  CHANGE_TV_LIVE,
} from "./store/modules/layouts";
import VueGridLayout from "vue-grid-layout";
import CreatedLayout from "./components/CreatedLayout";

export default {
  name: "App",
  created() {
    this.initRanking();
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.handleResponsive(this.deviceWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      isEdit: true,
      deviceWidth: 0,
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
    Test: () => import("./components/Test"),
  },
  computed: {
    ...mapState("layouts", ["layouts", "isEditLayout"]),
    _layouts: {
      get() {
        return this.layouts;
      },
      set(newLayout) {
        this.setLayouts(newLayout);
      },
    },
  },
  methods: {
    ...mapActions("layouts", {
      changeIsEditStatus: CHANGE_IS_EDIT_STATUS,
      getRanking: GET_RANKINGS,
      changeTvLive: CHANGE_TV_LIVE,
    }),
    ...mapMutations("layouts", {
      setLayouts: SET_LAYOUTS,
      addComponent: ADD_COMPONENT,
      deleteComponent: DELETE_COMPONENT,
      initRanking: INIT_RANKING,
    }),
    updateLayout(newLayout) {
      this.setLayouts(newLayout);
    },
    onClickEdit() {
      this.isEdit = !this.isEdit;
    },
    handleResize() {
      this.deviceWidth = window.innerWidth;
    },
    onClickDelete(id) {
      this.deleteComponent(id);
    },
    handleResponsive(value) {
      if (value < 900) {
        this._layouts = this._layouts.map((layout) => {
          if (layout.i === "RankingComponent") {
            layout.w = 24;
          }
          if (layout.i === "CurrentArenas") {
            layout.w = 24;
          }
          return layout;
        });
      } else {
        this._layouts = this._layouts.map((layout) => {
          if (layout.i === "RankingComponent") {
            layout.w = 12;
          }
          if (layout.i === "CurrentArenas") {
            layout.w = 12;
          }
          return layout;
        });
      }
    },
  },
  watch: {
    deviceWidth(value) {
      this.handleResponsive(value);
    },
    isEdit(value) {
      if (value) {
        this.initRanking();
      } else {
        this.getRanking();
      }
      console.log("HELLO IS_EDIT", value);
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

.delete-btn {
  position: absolute;
  top: 3px;
  right: 9px;
  bottom: 0;
  cursor: pointer;
}
</style>
