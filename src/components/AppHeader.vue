<template>
  <header class="header">
    <CenteringContainer class="headerContainer">
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
    </CenteringContainer>
  </header>
</template>

<script lang="ts">
import CenteringContainer from "@/components/CenteringContainer.vue";

export default {
  name: "AppHeader",
  components: {
    CenteringContainer,
  },
  emits: ["update"],
};
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--theme-color);
  width: 100%;
  position: fixed;
  top: 0;
}
.headerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.logo {
  display: inline-block;
  height: 60px;
}
.dateContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    width: 180px;
    flex-direction: column;
  }
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
