<template>
  <section>
    <h1 class="fortuneTitle">{{ date }}の運勢</h1>
    <ul class="signList">
      <li v-for="result in signResults" :key="result.sign" class="signItem">
        <SignItem :sign-result="result" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SignItem from "@/components/SignItem.vue";
import { SignResult } from "@/horoscope";

@Component({
  components: { SignItem }
})
export default class ResultContents extends Vue {
  @Prop({ required: true })
  signResults!: SignResult[];

  @Prop({ required: true })
  date!: string;
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
