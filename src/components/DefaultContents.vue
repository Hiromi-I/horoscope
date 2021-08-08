<template>
  <section class="defaultContents">
    <p class="info">右上の日付を選択して下さい</p>
    <ul class="signImageContainer">
      <li v-for="sign in signs" :key="sign" class="signImageListItem">
        <img :src="getSignImage(sign)" :alt="sign" width="175" height="175" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useSigns } from "@/hooks/useSigns";

export default defineComponent({
  name: "DefaultContents",
  setup() {
    const { signs, getSignImage } = useSigns();

    return {
      signs,
      getSignImage,
    };
  },
});
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
