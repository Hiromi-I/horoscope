const SIGN_MAP: { [key: string]: string } = {
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

export const useSigns = () => {
  const signs: Array<string> = Object.keys(SIGN_MAP);
  const getSignImage = (signName: string) => {
    const sign = SIGN_MAP[signName];
    return require(`@/assets/images/${sign}.jpg`);
  };

  return {
    signs,
    getSignImage,
  };
};