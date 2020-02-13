<template>
  <header class="header">
    <div class="headerContainer">
      <a class="logo">
        <img
          src="@/assets/images/logo.png"
          alt="星座占い"
          width="250"
          height="60"
        />
      </a>

      <div class="dateContainer">
        <p class="dateDescription">日付を選択して下さい</p>
        <input
          type="date"
          class="datePicker"
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          @change="$emit('update', $event.target.value)"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";

.header {
  background-color: $theme-color;
  height: 86px;
  width: 100%;
  position: fixed;
  top: 0;
}
.headerContainer {
  @include centeringContents();
  display: flex;
  justify-content: space-between;
}
.logo {
  display: inline-block;
  height: 60px;
  margin: 13px 0;
}
.dateContainer {
  padding-bottom: 16px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.dateDescription {
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
}
.datePicker {
  display: inline-block;
  font-size: 16px;
  width: 100%;
}
</style>
