export enum ECoins {
  bitcoin = 'bitcoin',
  ethereum = 'ethereum',
  tether = 'tether',
}

export type TCoinResponseFields = {
  data: {
    price: {
      USD: number;
      BTC: number;
      ETH: number;
    };
    athPrice: {
      BTC: number;
      ETH: number;
      USD: number;
    };
  };
};
