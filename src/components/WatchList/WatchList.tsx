import CoinList from '@/components/CoinList';
import useGetCoins from '@/utils/api/useGetCoins';
import { Wrapper, ListName, Loading, ErrorText } from './style';

const WatchList = () => {
  const listName = 'Current Prices';
  const { coins, error, isLoading } = useGetCoins();

  if (error) {
    return <ErrorText>Something went wrong</ErrorText>;
  }

  if (isLoading) {
    return <Loading>Loading</Loading>;
  }

  return (
    <Wrapper>
      <ListName>{listName}</ListName>
      {coins && coins?.data.length ? <CoinList coins={coins.data} /> : null}
    </Wrapper>
  );
};

export default WatchList;
