import { FC } from 'react';
import useConvertCoin, { ECurrencies } from '@/hooks/useConvertCoin';
import { APICoinInfo } from '@/utils/api/useGetCoins';
import { Container, ExchangeIcon, Input, InputWrapper, Result, Wrapper } from './style';
import UISelect from '@/components/ui-components/UISelect';
import UIButton from '@/components/ui-components/UIButton';
import exchangeIcon from '@/assets/icons/exchangeIcon.svg';

type ConverterContainerProps = {
  coins: APICoinInfo;
};

const ConverterContainer: FC<ConverterContainerProps> = ({ coins }) => {
  const {
    valueInput,
    fromCurrency,
    toCurrency,
    selectorsHandler,
    revertCoinsHandler,
    result,
    inputHandler,
  } = useConvertCoin(coins);

  const resultConverter = `${valueInput} ${fromCurrency} = ${result} ${toCurrency}`;

  return (
    <Container>
      <InputWrapper>
        <Input
          aria-label="converter input"
          type="number"
          min={0}
          value={valueInput}
          onChange={(event) => inputHandler(+event.target.value)}
        />
      </InputWrapper>
      <Wrapper>
        <UISelect
          current={fromCurrency}
          setCurrent={selectorsHandler(ECurrencies.from)}
          options={coins?.data || []}
        />
        <UIButton onClick={revertCoinsHandler}>
          <ExchangeIcon src={exchangeIcon} alt="exchange icon" />
        </UIButton>
        <UISelect
          current={toCurrency}
          setCurrent={selectorsHandler(ECurrencies.to)}
          options={coins?.data || []}
        />
      </Wrapper>
      <Result>{resultConverter}</Result>
    </Container>
  );
};

export default ConverterContainer;
