<template>
  <section>
    <h1 class="titleDate">{{ targetDate }}の運勢</h1>
    <ul class="signsList">
      <li
        v-for="result in signResultList"
        :key="`${targetDate}-${result.sign}`"
        class="signsList--Item"
      >
        <SignItem :sign-result="result" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, onMounted } from "vue";
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
    onMounted(() => scrollTo(0, 0));

    return {
      targetDate,
      signResultList,
    };
  },
});
</script>

<style lang="scss" scoped>
.titleDate {
  color: var(--theme-color);
  font-size: 36px;
  text-align: center;
  margin: 30px 0;
}
.signsList {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.signsList--Item {
  background-color: white;
  border: solid 1px var(--theme-color);
  border-radius: 5px;
}
</style>
