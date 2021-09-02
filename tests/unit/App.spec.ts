import { mount, flushPromises } from "@vue/test-utils";
import App from "@/App.vue";
import InitialGuide from "@/components/InitialGuide.vue";
import ResultContents from "@/components/ResultContents.vue";
import ModalDialog from "@/components/ModalDialog.vue";

window.scrollTo = jest.fn();

describe("App", () => {
  it("占い結果が無い場合はDefaultContentsを描画", async () => {
    const wrapper = mount(App);

    wrapper.vm.fortuneResult = null;
    await flushPromises();

    expect(wrapper.findComponent(InitialGuide).exists()).toBeTruthy();
    expect(wrapper.findComponent(ResultContents).exists()).toBeFalsy();
  });

  it("占い結果が有る場合はResultContentsを描画", async () => {
    const wrapper = mount(App);

    wrapper.vm.fortuneResult = {
      horoscope: {
        "2020/01/15": [],
      },
    };
    await flushPromises();

    expect(wrapper.findComponent(ResultContents).exists()).toBeTruthy();
    expect(wrapper.findComponent(InitialGuide).exists()).toBeFalsy();
  });

  it("メッセージが有る場合はModalDialogを表示", async () => {
    const wrapper = mount(App);

    wrapper.vm.errorMessage = "test";
    await flushPromises();

    expect(wrapper.findComponent(ModalDialog).isVisible()).toBeTruthy();
  });

  it("メッセージが無い場合はModalDialogを非表示", async () => {
    const wrapper = mount(App);

    wrapper.vm.errorMessage = "";
    await flushPromises();

    expect(wrapper.findComponent(ModalDialog).isVisible()).toBeFalsy();
  });
});
