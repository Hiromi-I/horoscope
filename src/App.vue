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
import { defineComponent, ref } from "vue";
import axios from "axios";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import DefaultContents from "@/components/DefaultContents.vue";
import ResultContents from "@/components/ResultContents.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import { Fortune, DailyResult, SignResult } from "@/horoscope";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    DefaultContents,
    ResultContents,
    ModalDialog,
  },
  setup() {
    const fortuneResult = ref<Fortune | null>(null);
    const dialogMessage = ref("");
    const onDateUpdate = (dateString: string) => {
      fortuneResult.value = null;

      if (dateString) {
        const { year, month, day } = parseDate(dateString);
        getFortune(year, month, day);
      }
    };

    type parseDateFunc = (dateString: string) => { year: string; month: string; day: string };
    const parseDate: parseDateFunc = (dateString: string) => {
      const array = dateString.split("-");
      return { year: array[0], month: array[1], day: array[2] };
    }

    type getFortuneFunc = (year: string, month: string, day: string) => Promise<void>;
    const getFortune: getFortuneFunc = async (year: string, month: string, day: string) => {
      const url = `/api/v1/fortune/?year=${year}&month=${month}&day=${day}`;
      try {
        const response = await axios.get<Fortune>(url);
        fortuneResult.value = response.data;
      } catch (error) {
        if (error.response.data === "Date Is Too Far") {
          dialogMessage.value =
            "指定された日時の占いデータは見つかりませんでした。\n近日の日時を指定して下さい。";
        } else {
          dialogMessage.value =
            "占いデータの取得に失敗しました。\n時間を置いて、再度ご確認ください。";
        }
      }
    }

    const clearMessage = () => {
      dialogMessage.value = "";
    };

    return {
      fortuneResult,
      dialogMessage,
      onDateUpdate,
      clearMessage,
    };
  },
});
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
