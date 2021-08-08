interface Fortune {
  horoscope: DailyResult;
}

interface DailyResult {
  [key: string]: SignResult[];
}

interface SignResult {
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

export { Fortune, DailyResult, SignResult };
