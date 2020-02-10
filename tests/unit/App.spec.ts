import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import DefaultContents from "@/components/DefaultContents.vue";
import ResultContents from "@/components/ResultContents.vue";

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
});
