import { render, waitFor } from "@testing-library/vue";
import App from "@/App.vue";
import { useGetFortune } from "@/hooks/useGetFortune";

window.scrollTo = jest.fn();
jest.mock("@/hooks/useGetFortune");
const defaultMockData = {
  fortuneResult: null,
  errorMessage: "",
  isLoading: false,
  onDateUpdate: () => "",
};

describe("App", () => {
  it("占い結果が無い場合はDefaultContentsを描画", () => {
    (useGetFortune as jest.Mock).mockReturnValue(defaultMockData);
    const { getByAltText, queryByRole } = render(App);

    expect(getByAltText("星座一覧")).not.toBeNull();
    expect(queryByRole("heading")).toBeNull();
  });

  it("占い結果が有る場合はResultContentsを描画", async () => {
    (useGetFortune as jest.Mock).mockReturnValue({
      ...defaultMockData,
      fortuneResult: { horoscope: { "2020/01/15": [] } },
    });
    const { queryByAltText, getByRole } = render(App);

    await waitFor(() => {
      expect(queryByAltText("星座一覧")).toBeNull();
      expect(getByRole("heading")).not.toBeNull();
    });
  });

  it("メッセージが有る場合はModalDialogを表示", async () => {
    (useGetFortune as jest.Mock).mockReturnValue({
      ...defaultMockData,
      errorMessage: "test",
    });
    const { queryByRole } = render(App);

    await waitFor(() => {
      expect(queryByRole("dialog")).not.toBeNull();
    });
  });

  it("メッセージが無い場合はModalDialogを非表示", async () => {
    (useGetFortune as jest.Mock).mockReturnValue(defaultMockData);
    const { queryByRole } = render(App);

    await waitFor(() => {
      expect(queryByRole("dialog")).toBeNull();
    });
  });
});
