import { storiesOf } from "@storybook/vue";
import LvupTv from "../components/LvupTv";

storiesOf("LvupTv story", module).add("test", () => ({
  components: {
    LvupTv,
  },
  template: `
    <LvupTv />
  `,
}));
