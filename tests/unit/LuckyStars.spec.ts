import { render } from "@testing-library/vue";
import LuckyStars from "@/components/LuckyStars.vue";

describe("LuckyStars", () => {
  it("scoreが3の場合", () => {
    const { getAllByText } = render(LuckyStars, { props: { score: 3 } });

    expect(getAllByText("★")).toHaveLength(3);
    expect(getAllByText("☆")).toHaveLength(2);
    expect(getAllByText(/[★☆]/)).toHaveLength(5);
  });

  it("scoreが5の場合", () => {
    const { getAllByText, queryByText } = render(LuckyStars, {
      props: { score: 5 },
    });

    expect(getAllByText("★")).toHaveLength(5);
    expect(queryByText("☆")).toBeNull;
    expect(getAllByText(/[★☆]/)).toHaveLength(5);
  });

  it("scoreが0の場合", () => {
    const { getAllByText, queryByText } = render(LuckyStars, {
      props: { score: 0 },
    });

    expect(queryByText("★")).toBeNull;
    expect(getAllByText("☆")).toHaveLength(5);
    expect(getAllByText(/[★☆]/)).toHaveLength(5);
  });
});
