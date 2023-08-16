<template>
  <div>
    <!-- <form @submit.prevent="handleSubmit"> -->
    <input type="text" v-model="aa" />
    <input type="submit" value="Submit" @click="handleSubmit" /><br />
    <!-- </form> -->
    {{ time }}<br />
    {{ text }}<br />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TimeView',
  setup() {
    const aa = ref('123');
    const time = ref('取得中');
    const text = ref('未入力');

    function handleSubmit() {
      fetch('http://localhost:3000/api/time', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: aa.value }),
      })
        .then((response) => response.json())
        .then((data) => {
          // alert('Submitted: ' + data.time);
          time.value = data.time;
          text.value = data.text;
        })
    }

    return {
      aa,
      handleSubmit,
      time,
      text,
    };
  },
};
</script>
