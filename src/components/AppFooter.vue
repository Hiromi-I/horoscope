<template>
  <footer class="footer">
    <div class="footerContainer">
      <p class="footerLink">
        powerd by&nbsp;<a
          href="http://jugemkey.jp/api/waf/api_free.php"
          class="footerLinkText"
          >JugemKey
        </a>
      </p>
      <p class="footerLink">
        【PR】<a href="http://www.tarim.co.jp/" class="footerLinkText">
          原宿占い館 塔里木
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";

.footer {
  background-color: $theme-color;
  color: white;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.footerContainer {
  @include centeringContents();
  display: flex;
}
.footerLink + .footerLink {
  margin-left: 30px;
}
.footerLinkText {
  display: inline-block;
  color: #337ab7;
  line-height: 50px;

  &:hover {
    color: lighten(#337ab7, 30%);
  }
}
</style>
