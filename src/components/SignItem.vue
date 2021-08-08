<template>
  <div>
    <img
      class="signImage"
      :src="getSignImage(signResult.sign)"
      :alt="signResult.sign"
    />

    <h2 class="signName">{{ signResult.sign }}</h2>

    <p class="fortuneContent">{{ signResult.content }}</p>
    <hr class="splitter" />

    <dl class="topicSet">
      <dt class="topicTitle">ラッキーアイテム</dt>
      <dd class="topicBody">{{ signResult.item }}</dd>
      <dt class="topicTitle">ラッキーカラー</dt>
      <dd class="topicBody">{{ signResult.color }}</dd>
    </dl>
    <hr class="splitter" />

    <dl class="topicSet">
      <dt class="topicTitle">総合運</dt>
      <dd class="topicBody stars"><LuckyStars :score="signResult.total" /></dd>
      <dt class="topicTitle">金運</dt>
      <dd class="topicBody stars"><LuckyStars :score="signResult.money" /></dd>
      <dt class="topicTitle">仕事運</dt>
      <dd class="topicBody stars"><LuckyStars :score="signResult.job" /></dd>
      <dt class="topicTitle">恋愛運</dt>
      <dd class="topicBody stars"><LuckyStars :score="signResult.love" /></dd>
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import LuckyStars from "@/components/LuckyStars.vue";
import { SignResult } from "@/horoscope";
import { useSigns } from "@/hooks/useSigns";

export default defineComponent({
  name: "SignItem",
  components: {
    LuckyStars,
  },
  props: {
    signResult: {
      type: Object as PropType<SignResult>,
      required: true,
    },
  },
  setup() {
    const { getSignImage } = useSigns();

    return {
      getSignImage
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";

.signImage {
  display: block;
  width: 95%;
  height: auto;
  margin: 5px auto 0;
}
.signName {
  color: white;
  background-color: $theme-color;
  font-size: 18px;
  line-height: 36px;
  letter-spacing: 0.3em;
  text-align: center;
  margin-bottom: 15px;
}
.splitter {
  border-color: $theme-color;
  margin: 10px;
}
.fortuneContent {
  height: 6em;
  margin: 10px;
}
.topicSet {
  margin: 10px;
}
.topicTitle {
  color: $theme-color;
  font-weight: bold;
}
.topicBody {
  color: $theme-color;
  margin-bottom: 10px;
}
.stars {
  font-size: 18px;
  letter-spacing: 0.2em;
}
</style>
