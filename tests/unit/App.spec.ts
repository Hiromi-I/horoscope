import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import DefaultContents from "@/components/DefaultContents.vue";
import ResultContents from "@/components/ResultContents.vue";
import ModalDialog from "@/components/ModalDialog.vue";

describe("App", () => {
  it("占い結果が無い場合はDefaultContentsを描画", () => {
    const wrapper = shallowMount(App);

    wrapper.setData({ fortuneResult: null });

    expect(wrapper.find(DefaultContents).exists()).toBeTruthy();
    expect(wrapper.find(ResultContents).exists()).toBeFalsy();
  });

  it("占い結果が有る場合はResultContentsを描画", () => {
    const wrapper = shallowMount(App);

    wrapper.setData({ fortuneResult: {} });

    expect(wrapper.find(ResultContents).exists()).toBeTruthy();
    expect(wrapper.find(DefaultContents).exists()).toBeFalsy();
  });

  it("メッセージが有る場合はModalDialogを表示", () => {
    const wrapper = shallowMount(App);

    wrapper.setData({ dialogMessage: "test" });

    expect(wrapper.find(ModalDialog).isVisible()).toBeTruthy();
  });

  it("メッセージが無い場合はModalDialogを非表示", () => {
    const wrapper = shallowMount(App);

    wrapper.setData({ dialogMessage: "" });

    expect(wrapper.find(ModalDialog).isVisible()).toBeFalsy();
  });
});
