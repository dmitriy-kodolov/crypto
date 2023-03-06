import { API_URL } from '@/utils/constans/API_URL';
import getFetcher from '@/utils/helpers/getFetcher';
import useSWR from 'swr';

export type APICoinInfo = {
  data: {
    athPrice: {
      USD: number;
    };
  };
};

const useGetAthCoin = (name: string) => {
  const { data, ...rest } = useSWR<APICoinInfo, Error>(
    API_URL.COIN.GET_COIN_INFO(name),
    getFetcher,
  );

  return { data, ...rest };
};

export default useGetAthCoin;
