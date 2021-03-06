import { shallowMount } from "@vue/test-utils";
import LuckyStars from "@/components/LuckyStars.vue";

describe("LuckyStars", () => {
  it("scoreが3の場合", () => {
    const wrapper = shallowMount(LuckyStars, {
      propsData: { score: 3 }
    });

    expect(wrapper.text().match(/★/g)).toHaveLength(3);
    expect(wrapper.text().match(/☆/g)).toHaveLength(2);
    expect(wrapper.text().match(/[★☆]/g)).toHaveLength(5);
  });

  it("scoreが5の場合", () => {
    const wrapper = shallowMount(LuckyStars, {
      propsData: { score: 5 }
    });

    expect(wrapper.text().match(/★/g)).toHaveLength(5);
    expect(wrapper.text().match(/☆/g)).toBeNull;
    expect(wrapper.text().match(/[★☆]/g)).toHaveLength(5);
  });

  it("scoreが0の場合", () => {
    const wrapper = shallowMount(LuckyStars, {
      propsData: { score: 0 }
    });

    expect(wrapper.text().match(/★/g)).toBeNull;
    expect(wrapper.text().match(/☆/g)).toHaveLength(5);
    expect(wrapper.text().match(/[★☆]/g)).toHaveLength(5);
  });

});
