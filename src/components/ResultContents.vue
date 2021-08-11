<template>
  <section>
    <h1 class="fortuneTitle">{{ targetDate }}の運勢</h1>
    <ul class="signList">
      <li
        v-for="result in signResultList"
        :key="`${targetDate}-${result.sign}`"
        class="signItem"
      >
        <SignItem :sign-result="result" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import SignItem from "@/components/SignItem.vue";
import { FortuneResponseType, SignDayResultType } from "@/types/horoscope";

export default defineComponent({
  name: "ResultContents",
  components: {
    SignItem,
  },
  props: {
    fortuneResult: {
      type: Object as PropType<FortuneResponseType>,
      required: true,
    },
  },
  setup(props) {
    const { fortuneResult } = toRefs(props);
    const targetDate: string = Object.keys(fortuneResult.value.horoscope)[0];
    const signResultList: Array<SignDayResultType> =
      fortuneResult.value.horoscope[targetDate];

    return {
      targetDate,
      signResultList,
    };
  },
});
</script>

<style lang="scss" scoped>
.fortuneTitle {
  color: var(--theme-color);
  font-size: 36px;
  text-align: center;
  margin: 30px 0;
}
.signList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
}

.signItem {
  width: 23%;
  margin-bottom: 20px;
  background-color: white;
  border: solid 1px var(--theme-color);
  border-radius: 5px;
}
</style>
