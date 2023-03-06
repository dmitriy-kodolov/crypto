import { ECoins, TCoinResponseFields } from '__testTypes__/percentage';
import getFixture from '__testUtils__/getFixture';
import { getPercentToAth, getPercentFromAth } from '@/utils/ATH';

const someTestCases = [
  {
    title: ECoins.bitcoin,
    getPercentFromAthResult: 4090.5605422535755,
    getPercentToAthResult: 97.61368439874101,
  },
  {
    title: ECoins.ethereum,
    getPercentFromAthResult: 212.96670154031614,
    getPercentToAthResult: 68.04771897207152,
  },
  {
    title: ECoins.tether,
    getPercentFromAthResult: 65020118.72260383,
    getPercentToAthResult: 99.99984620168624,
  },
];

describe('Tests for percentage', () => {
  someTestCases.forEach((testCase) => {
    const coinInfo = getFixture(`${testCase.title}.json`) as TCoinResponseFields;

    describe(`Tests getPercentFromAth for ${testCase}`, () => {
      it(`should return ${testCase.getPercentFromAthResult}`, () => {
        const result = getPercentFromAth(coinInfo.data.athPrice.USD, coinInfo.data.price.USD);
        expect(result).toBe(result);
      });
    });

    describe(`Tests getPercentToAth for ${testCase}`, () => {
      it(`should return ${testCase.getPercentToAthResult}`, () => {
        const result = getPercentToAth(coinInfo.data.athPrice.USD, coinInfo.data.price.USD);
        expect(result).toBe(result);
      });
    });
  });
});
