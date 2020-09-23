import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

// const label = "Fruits";
// const options = {
//   Kiwi: "kiwi",
//   Guava: "guava",
//   Watermelon: "watermelon",
// };
// const defaultValue = "kiwi";
// const groupId = "GROUP-ID1";

// const value = radios(label, options, defaultValue, groupId);

storiesOf("test", module)
  .addDecorator(withKnobs)
  .add("test", () => ({
    props: {
      text: {
        default: text("Text", "HELLO"),
      },
    },
    data: () => ({
      count: 0,
    }),
    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
    },
    template: `
    <div>
      <div>{{ count }}</div>
      <div>{{text}}</div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  `,
  }));
