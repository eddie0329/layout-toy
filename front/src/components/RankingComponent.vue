<template>
  <div style="background: red; width: 100%; height: 100%; overflow-y: auto; position: absolute">
    <h5>RANKING COMPONENT</h5>
    <ul>
      <li v-for="rank in ranking" :key="rank.placement">
        <span class="placement">{{ rank.placement }}</span>
        <span>{{ rank.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RankingComponent",
  computed: {
    ...mapState("layouts", ["ranking"]),
  },
};
</script>

<style scoped>
.placement {
  margin-right: 2%;
  font-size: 20px;
  color: white;
}
</style>