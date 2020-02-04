<template>
  <div>
    <AppHeader @update="onDateUpdate" />

    <main>
      <div class="centeringContainer">
        <transition mode="out-in" appear>
          <ResultContents
            v-if="fortuneResult"
            :fortune-result="fortuneResult"
          />
          <DefaultContents v-else />
        </transition>
      </div>
    </main>

    <AppFooter />

    <ModalDialog
      v-show="dialogMessage"
      :message="dialogMessage"
      @close="clearMessage"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import DefaultContents from "@/components/DefaultContents.vue";
import ResultContents from "@/components/ResultContents.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import { Fortune, DailyResult, SignResult } from "@/horoscope";

@Component({
  components: {
    AppHeader,
    AppFooter,
    DefaultContents,
    ResultContents,
    ModalDialog
  }
})
export default class App extends Vue {
  fortuneResult: Fortune | null = null;
  dialogMessage: string = "";

  onDateUpdate(dateString: string): void {
    this.fortuneResult = null;

    if (dateString) {
      const { year, month, day } = this.parseDate(dateString);
      this.getFortune(year, month, day);
    }
  }

  async getFortune(year: string, month: string, day: string): Promise<void> {
    const url = `/api/v1/fortune/?year=${year}&month=${month}&day=${day}`;
    try {
      const response = await axios.get<Fortune>(url);
      this.fortuneResult = response.data;
    } catch (error) {
      this.dialogMessage =
        "占いデータの取得に失敗しました。\n時間を置いて、再度ご確認ください。";
    }
  }

  parseDate(dateString: string): { year: string; month: string; day: string } {
    const array = dateString.split("-");
    return { year: array[0], month: array[1], day: array[2] };
  }

  clearMessage(): void {
    this.dialogMessage = "";
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

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>
