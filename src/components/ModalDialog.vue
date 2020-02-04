<template>
  <div class="back">
    <div class="dialog">
      <p class="message">{{ message }}</p>
      <button class="closeButton" @click="$emit('close')">閉じる</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ModalDialog extends Vue {
  @Prop({ required: true })
  message!: string;
}
</script>

<style lang="scss" scoped>
.back {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
}
.dialog {
  background-color: white;
  width: 600px;
  height: 200px;
  margin: auto;
  padding: 15px;
  border-radius: 10px;
  position: relative;
}
.message {
  height: 130px;
  font-size: 18px;
  line-height: 1.8;
  white-space: pre-line;
}
.closeButton {
  -webkit-appearance: none;
  border: none;
  outline: none;
  background-color: green;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  width: 80px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  right: 15px;
  bottom: 15px;

  &:hover {
    background-color: lighten(green, 10%);
  }
}
</style>
