import { storiesOf } from "@storybook/vue";

storiesOf("test", module).add("test", () => ({
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
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  `,
}));
