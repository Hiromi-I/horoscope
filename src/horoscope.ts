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

const signMap: { [key: string]: string } = {
  牡羊座: "aries",
  牡牛座: "taurus",
  双子座: "gemini",
  蟹座: "cancer",
  獅子座: "leo",
  乙女座: "virgo",
  天秤座: "libra",
  蠍座: "scorpio",
  射手座: "sagittarius",
  山羊座: "capricorn",
  水瓶座: "aquarius",
  魚座: "pisces"
};

export { Fortune, DailyResult, SignResult, signMap };
