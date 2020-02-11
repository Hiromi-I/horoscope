import { shallowMount } from "@vue/test-utils";
import ModalDialog from "@/components/ModalDialog.vue";

describe("ModalDialog", () => {
  it("受け取ったメッセージを表示", () => {
    const wrapper = shallowMount(ModalDialog, {
      propsData: { message: 'test message' }
    });

    expect(wrapper.find('.message').text()).toBe('test message');
  });
});
