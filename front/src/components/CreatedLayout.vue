<template>
  <div class="container" ref="container">
    <component
      :is="item.i"
      v-for="item in layouts"
      :key="item.id"
      class="item"
      :style="{'width': `${((item.w / 24) * 100) - 1}%`, 'height': `${(item.h + 1) * 30}px`, 'transform': `translate3d(${Math.round(colWidth * item.x + (item.x + 1) * 10)}px, ${Math.round(30 * item.y + (item.y + 1) * 10)}px, 0px)`} "
    >{{item.i}}</component>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CreatedLayout",
  components: {
    LvupTv: () => import("./LvupTv"),
    CurrentArenas: () => import("./CurrentArenas"),
    RankingComponent: () => import("./RankingComponent"),
    UserBanner: () => import("./UserBanner"),
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      colWidth: 0,
    };
  },
  computed: {
    ...mapState("layouts", ["layouts"]),
  },
  methods: {
    handleResize() {
      this.colWidth = (this.$refs.container.clientWidth - 10 * (24 + 1)) / 24;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
  background: yellow;
}
.item {
  position: absolute;
}
</style>