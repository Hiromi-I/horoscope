<template>
  <div>
    <AppHeader @update="onDateUpdate" />

    <main>
      <div class="centeringContainer">
        <ResultContents
          v-if="signResults && targetDate"
          :sign-results="signResults"
          :date="targetDate"
        />
        <DefaultContents v-else />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import DefaultContents from "@/components/DefaultContents.vue";
import ResultContents from "@/components/ResultContents.vue";
import { Fortune, DailyResult, SignResult } from "@/horoscope";

@Component({
  components: { AppHeader, AppFooter, DefaultContents, ResultContents }
})
export default class App extends Vue {
  signResults: SignResult[] | null = null;
  targetDate: string | null = null;

  onDateUpdate(dateString: string): void {
    if (dateString === "") {
      this.signResults = null;
      this.targetDate = null;
    } else {
      const { year, month, day } = this.parseDate(dateString);
      this.targetDate = `${year}年${month}月${day}日`;
      this.getFortune(year, month, day);
    }
  }

  async getFortune(year: string, month: string, day: string): Promise<void> {
    const url = `/api/v1/fortune?year=${year}&month=${month}&day=${day}`;
    const response = await axios.get<Fortune>(url);
    const dailyResult = response.data["horoscope"];

    // keyが動的に変わるので、この様に取得
    const targetDays = Object.keys(dailyResult);
    this.signResults = dailyResult[targetDays[0]];
  }

  parseDate(dateString: string): { year: string; month: string; day: string } {
    const array = dateString.split("-");
    return { year: array[0], month: array[1], day: array[2] };
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

.centeringContainer {
  @include centeringContents();
}
</style>
