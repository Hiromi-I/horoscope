<template>
  <section class="defaultContents">
    <p class="info">右上の日付を選択して下さい</p>
    <ul class="signImageContainer">
      <li v-for="sign in signs" :key="sign" class="signImageListItem">
        <img :src="getImagePath(sign)" :alt="sign" width="175" height="175" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { signMap } from "@/horoscope";

@Component
export default class DefaultContents extends Vue {
  signs: String[] = Object.values(signMap);

  getImagePath(sign: string): string {
    return require(`@/assets/images/${sign}.jpg`);
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";

.defaultContents {
  background-color: white;
  border: solid 2px $sub-color;
  padding: 40px;
  margin: 40px 0 0;
}
.info {
  color: $theme-color;
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
}

.signImageContainer {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.signImageListItem {
  width: 175px;
  overflow: hidden;
}
</style>
