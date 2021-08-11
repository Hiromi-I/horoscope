import { Ref, ref } from "vue";
import axios from "axios";

import { FortuneResponseType } from "@/types/horoscope";

export const useGetFortune = (): {
  fortuneResult: Ref<FortuneResponseType | null>;
  errorMessage: Ref<string>;
  isLoading: Ref<boolean>;
  onDateUpdate: (dateString: string) => void;
} => {
  const fortuneResult = ref<FortuneResponseType | null>(null);
  const errorMessage = ref("");
  const isLoading = ref(false);

  const onDateUpdate = (dateString: string): void => {
    fortuneResult.value = null;
    if (dateString === "") return;

    const [year, month, day] = dateString.split("-");
    _getFortune(year, month, day);
  };

  const _getFortune = async (
    year: string,
    month: string,
    day: string
  ): Promise<void> => {
    const url = `/api/v1/fortune/?year=${year}&month=${month}&day=${day}`;
    isLoading.value = true;

    try {
      const response = await axios.get<FortuneResponseType>(url);
      fortuneResult.value = response.data;
    } catch (error) {
      errorMessage.value =
        error.response.data === "Date Is Too Far"
          ? "指定された日時の占いデータは見つかりませんでした。\n近日の日時を指定して下さい。"
          : "占いデータの取得に失敗しました。\n時間を置いて、再度ご確認ください。";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fortuneResult,
    errorMessage,
    isLoading,
    onDateUpdate,
  };
};
