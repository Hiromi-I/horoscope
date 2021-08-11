import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader", () => {
  it("日付選択で値をEmmit", () => {
    const wrapper = mount(AppHeader);
    const datePicker = wrapper.find(".datePicker");

    datePicker.setValue("2020-02-10");
    datePicker.trigger("change");

    expect(wrapper.emitted().update[0]).toEqual(["2020-02-10"]);
  });

  it("日付フォーマットがpatternに合っていない場合は空文字をEmmit", () => {
    const wrapper = mount(AppHeader);
    const datePicker = wrapper.find(".datePicker");

    datePicker.setValue("2020-2-1");
    datePicker.trigger("change");

    expect(wrapper.emitted().update[0]).toEqual([""]);
  });
});
