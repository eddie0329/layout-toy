import Vuex from "vuex";
import { storiesOf } from "@storybook/vue";
import RankingComponent from "../components/RankingComponent";

storiesOf("RankingComponent", module).add("test", () => ({
  components: {
    RankingComponent,
  },
  template: `
    <RankingComponent />
  `,
  store: new Vuex.Store({
    modules: {
      layouts: {
        namespaced: true,
        state: { ranking: [{ placement: 1, name: "eddie" }] },
      },
    },
  }),
}));
