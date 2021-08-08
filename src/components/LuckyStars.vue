<template>
  <span>
    <span v-for="count in score" :key="`lucky-${count}`">&starf;</span>
    <span v-for="count in 5 - score" :key="`unlucky-${count}`">&star;</span>
  </span>
</template>

<script lang="ts">
export default {
  name: "LuckyStars",
  props: {
    score: {
      type: Number,
      required: true,
    },
  },
};
</script>
