<template>
  <AppHeader @update="onDateUpdate" />

  <main>
    <CenteringContainer>
      <transition mode="out-in" appear>
        <ResultContents v-if="fortuneResult" :fortune-result="fortuneResult" />
        <InitialGuide v-else />
      </transition>
    </CenteringContainer>
  </main>

  <AppFooter />

  <ModalDialog
    v-show="errorMessage"
    :message="errorMessage"
    @close="clearMessage"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import InitialGuide from "@/components/InitialGuide.vue";
import ResultContents from "@/components/ResultContents.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import CenteringContainer from "@/components/CenteringContainer.vue";
import { useGetFortune } from "@/hooks/useGetFortune";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    InitialGuide,
    ResultContents,
    ModalDialog,
    CenteringContainer,
  },
  setup() {
    const { fortuneResult, errorMessage, isLoading, onDateUpdate } =
      useGetFortune();
    const clearMessage = () => (errorMessage.value = "");

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
/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

nav ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

/* change colours to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colours to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
/* Reset Stylesheet End  */

body {
  background: url(assets/images/back.png) repeat;
  min-height: 100vh;
  padding: 150px 0 70px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #333;

  @media screen and (min-width: 768px) {
    padding: 100px 0 70px;
  }
}
:root {
  --theme-color: #0f248a;
  --sub-color: #f3eb34;
  --contents-width: 90%;

  @media screen and (min-width: 1200px) {
    & {
      --contents-width: 1170px;
    }
  }
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
