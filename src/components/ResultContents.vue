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
import { Component, Vue, Prop } from "vue-property-decorator";
import SignItem from "@/components/SignItem.vue";
import { Fortune, SignResult } from "@/horoscope";

@Component({
  components: { SignItem }
})
export default class ResultContents extends Vue {
  @Prop({ required: true })
  fortuneResult!: Fortune;

  get targetDate(): string {
    const keys: string[] = Object.keys(this.fortuneResult.horoscope);
    return keys[0];
  }

  get signResultList(): SignResult[] {
    return this.fortuneResult.horoscope[this.targetDate];
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";

.fortuneTitle {
  color: $theme-color;
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
  border: solid 1px $theme-color;
  border-radius: 5px;
}
</style>
