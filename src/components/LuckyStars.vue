<template>
  <span>
    <span v-for="count in score" :key="`lucky-${count}`">&starf;</span>
    <span v-for="count in 5 - score" :key="`unlucky-${count}`">&star;</span>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class LuckyStars extends Vue {
  @Prop({ required: true })
  score!: number;
}
</script>
