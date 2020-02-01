<template>
  <div>
    <AppHeader @update="onDateUpdate" />
    {{ fortuneResult }}
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

@Component({
  components: { AppHeader, AppFooter }
})
export default class App extends Vue {
  targetDate: string = "";
  fortuneResult: object = {};

  onDateUpdate(dateString: string): void {
    this.targetDate = dateString;
    // TODO: 日付をparse
    this.getFortune(2020, 1, 31);
  }

  async getFortune(year: number, month: number, day: number) {
    const url = `/api/v1/fortune?year=${year}&month=${month}&day=${day}`;
    const result = await axios.get(url);
    this.fortuneResult = result;
  }
}
</script>

<style lang="scss">
@import "assets/styles/reset.css";
@import "assets/styles/common";

body {
  background: url(assets/images/back.png) repeat;
  min-height: 100vh;
  padding: 100px 0 70px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}
</style>
