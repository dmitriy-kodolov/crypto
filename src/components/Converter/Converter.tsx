import { Container, ConverterWrapper, ErorrMessage, HeaderName } from './style';
import useGetCoins from '@/utils/api/useGetCoins';
import ConverterContainer from '@/components/ConverterContainer';

const Converter = () => {
  const { coins, error, isLoading } = useGetCoins();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    <ConverterWrapper>
      <HeaderName>Converter Calculator</HeaderName>
      <Container>
        <ErorrMessage>Something went wrong</ErorrMessage>
      </Container>
    </ConverterWrapper>;
  }

  return (
    <ConverterWrapper>
      <HeaderName>Converter Calculator</HeaderName>
      {coins ? <ConverterContainer coins={coins} /> : null}
    </ConverterWrapper>
  );
};

export default Converter;
