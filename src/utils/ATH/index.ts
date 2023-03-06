export const getPercentFromAth = (athPrice: number, currentPrice: number): number =>
  (athPrice / currentPrice) * 100 - 100;

export const getPercentToAth = (athPrice: number, currentPrice: number): number =>
  (currentPrice / athPrice) * 100 - 100;
