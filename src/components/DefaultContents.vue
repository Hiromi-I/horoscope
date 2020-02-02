<template>
  <section class="defaultContents">
    <p class="info">右上の日付を選択して下さい</p>
    <ul class="signImageContainer">
      <li v-for="sign in signs" :key="sign" class="signImageListItem">
        <img :src="getImagePath(sign)" :alt="sign" class="signImage" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultContents extends Vue {
  signs: String[] = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces"
  ];

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
  width: 16%;
  overflow: hidden;
}
.signImage {
  width: 100%;
  height: auto;
}
</style>
