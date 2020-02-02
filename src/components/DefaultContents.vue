<template>
  <div>default</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultContents extends Vue {
  getImagePath(sign: string): string {
    return require(`@/assets/images/${sign}.jpg`);
  }
}
</script>