interface Fortune {
  horoscope: Horoscope;
}

interface Horoscope {
  [key: string]: DailyResult[];
}

interface DailyResult {
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
  hoge: boolean;
}

export { Fortune, Horoscope, DailyResult };
