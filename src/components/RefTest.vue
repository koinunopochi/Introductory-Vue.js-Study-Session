<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      // JavaScript 内では .value が必要
      console.log(count);
      count.value++;
    }
    function decrement() {
      count.value--;
    }

    // 関数も公開することを忘れないでください。
    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
