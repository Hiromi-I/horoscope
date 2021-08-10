export type FortuneResponseType = {
  horoscope: DayResultType;
};

export type DayResultType = {
  [key: string]: Array<SignDayResultType>;
};

export type SignDayResultType = {
  content: string;
  item: string;
  money: number;
  total: number;
  job: number;
  color: string;
  day: number;
  love: number;
  rank: number;
  sign: string;
};
