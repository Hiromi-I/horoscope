import { render } from "@testing-library/vue";
import ModalDialog from "@/components/ModalDialog.vue";

describe("ModalDialog", () => {
  it("受け取ったメッセージを表示", () => {
    const { html } = render(ModalDialog, {
      props: { message: "test message" },
    });

    expect(html()).toMatch(/test message/);
  });
});
