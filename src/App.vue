<template>
  <div class="app">
    <RefTest />
    <TimeView />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import RefTest from './components/RefTest.vue';
import TimeView from './components/TimeView.vue';

export default defineComponent({
  components: {
    RefTest,
    TimeView,
  },
});
</script>
