<template>
  <footer class="footer">
    <CenteringContainer class="footerContainer">
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
    </CenteringContainer>
  </footer>
</template>

<script lang="ts">
import CenteringContainer from "@/components/CenteringContainer.vue";

export default {
  name: "AppFooter",
  components: {
    CenteringContainer,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--theme-color);
  color: white;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.footerContainer {
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
