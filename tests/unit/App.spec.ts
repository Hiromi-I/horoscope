import { render, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
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

    const defaultContentsImage = getByAltText("星座一覧");
    const resultContentsTitle = queryByRole("heading");

    expect(defaultContentsImage).toBeInTheDocument();
    expect(resultContentsTitle).not.toBeInTheDocument();
  });

  it("占い結果が有る場合はResultContentsを描画", async () => {
    (useGetFortune as jest.Mock).mockReturnValue({
      ...defaultMockData,
      fortuneResult: { horoscope: { "2020/01/15": [] } },
    });
    const { queryByAltText, getByRole } = render(App);

    await waitFor(() => {
      const defaultContentsImage = queryByAltText("星座一覧");
      const resultContentsTitle = getByRole("heading");

      expect(defaultContentsImage).not.toBeInTheDocument();
      expect(resultContentsTitle).toBeInTheDocument();
    });
  });

  it("メッセージが有る場合はModalDialogを表示", async () => {
    (useGetFortune as jest.Mock).mockReturnValue({
      ...defaultMockData,
      errorMessage: "test",
    });
    const { queryByRole } = render(App);

    await waitFor(() => {
      const dialog = queryByRole("dialog");
      expect(dialog).toBeInTheDocument();
    });
  });

  it("メッセージが無い場合はModalDialogを非表示", () => {
    (useGetFortune as jest.Mock).mockReturnValue(defaultMockData);
    const { queryByRole } = render(App);

    const dialog = queryByRole("dialog");

    expect(dialog).not.toBeInTheDocument();
  });
});
