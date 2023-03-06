import useGetAthCoin from '@/utils/api/useGetAthCoin';
import { CoinInfo } from '@/utils/api/useGetCoins';
import { getPercentFromAth, getPercentToAth } from '@/utils/ATH';
import { FC } from 'react';
import { CoinField, Wrapper } from './style';

export type CoinItemProps = CoinInfo;

const CoinItem: FC<CoinItemProps> = ({
  category,
  circulatingSupply,
  name,
  slug,
  values: {
    USD: { price },
  },
}) => {
  const { data } = useGetAthCoin(slug);
  const toAthPercent = parseFloat(getPercentToAth(data?.data.athPrice.USD || 1, price).toFixed(1));
  const fromAthPercent = parseFloat(
    getPercentFromAth(data?.data.athPrice.USD || 1, price).toFixed(1),
  );
  const currentPrice = parseFloat(price.toFixed(2));
  const currentCirculatingSupply = parseFloat(circulatingSupply.toFixed(2));
  const currentMarketCup = parseFloat((circulatingSupply * price).toFixed(2));

  return (
    <Wrapper>
      <CoinField>{name}</CoinField>
      <CoinField>${currentPrice}</CoinField>
      <CoinField>${currentCirculatingSupply}</CoinField>
      <CoinField>${currentMarketCup}</CoinField>
      <CoinField>{category}</CoinField>
      <CoinField isRed={toAthPercent < 0}>{toAthPercent}%</CoinField>
      <CoinField isGreen={fromAthPercent >= 0}>{fromAthPercent}%</CoinField>
    </Wrapper>
  );
};

export default CoinItem;
