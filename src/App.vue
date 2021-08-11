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
      v-show="errorMessage"
      :message="errorMessage"
      @close="clearMessage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import DefaultContents from "@/components/DefaultContents.vue";
import ResultContents from "@/components/ResultContents.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import { useGetFortune } from "@/hooks/useGetFortune";

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
    const { fortuneResult, errorMessage, isLoading, onDateUpdate } = useGetFortune();
    const clearMessage = () => errorMessage.value = "";

    return {
      fortuneResult,
      errorMessage,
      isLoading,
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
:root {
  --theme-color: #0f248a;
  --sub-color: #F3EB34;
  --contents-width: 1170px
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
