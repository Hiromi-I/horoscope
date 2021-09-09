import { render, fireEvent } from "@testing-library/vue";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader", () => {
  it("日付選択で値をEmmit", async () => {
    const { getByTestId, emitted } = render(AppHeader);
    const inputDate = getByTestId("input-date");

    await fireEvent.change(inputDate, { target: { value: "2020-02-10" } });

    expect(emitted().update[0]).toEqual(["2020-02-10"]);
  });

  it("日付フォーマットがpatternに合っていない場合は空文字をEmmit", async () => {
    const { getByTestId, emitted } = render(AppHeader);
    const inputDate = getByTestId("input-date");

    await fireEvent.change(inputDate, { target: { value: "2020-2-1" } });

    expect(emitted().update[0]).toEqual([""]);
  });
});
