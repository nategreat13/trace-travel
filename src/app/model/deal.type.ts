export type Deal = {
  id: string;
  origin: string;
  destination: string;
  url: string;
  percentOff: number;

  layoverInfo: string;
  dateString: string;
  domesticOrInternational: 'International' | 'Domestic';
  normalPriceUSD: number;
  dealPriceUSD: number;
  imageUrl: string;
  priceWillLastText: string;
  createdAtMS: number;
  temperature: string;
  weather: string;
  airlines: string;
  duration: string;
  quickTip: string;
  type: string;
  thingsToDo: Record<string, ThingToDo>;
};

type ThingToDo = {
  title: string;
  paragraph: string;
};
