import { APICoinInfo } from '@/utils/api/useGetCoins';
import { useState, useCallback } from 'react';

export enum ECurrencies {
  from = 'from',
  to = 'to',
}

type TConvertHandlerParams = {
  value: number;
  fromCurr: string;
  toCurr: string;
};

const useConvertCoin = (data: APICoinInfo) => {
  const [valueInput, setValueInput] = useState(1);
  const [fromCurrency, setFromCurrency] = useState(() => data.data[0].name);
  const [toCurrency, setToCurrency] = useState(() => data.data[1].name);
  const [result, setResult] = useState(() => {
    return +((1 * data.data[0].values.USD.price) / data.data[1].values.USD.price).toFixed(7);
  });

  const convertHandler = useCallback(
    ({ value, fromCurr, toCurr }: TConvertHandlerParams): void => {
      const fromPriceCoin = data.data.find(({ name }) => name === fromCurr);
      const toPriceCoin = data.data.find(({ name }) => name === toCurr);

      if (fromPriceCoin && toPriceCoin) {
        const toPrice = toPriceCoin.values.USD.price;
        const fromPrice = fromPriceCoin.values.USD.price;
        console.log(fromPrice, toPrice);
        setResult(+((value * fromPrice) / toPrice).toFixed(7));
      }
      setValueInput(value);
    },
    [data],
  );

  const revertCoinsHandler = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    convertHandler({ value: valueInput, toCurr: fromCurrency, fromCurr: toCurrency });
  }, [fromCurrency, toCurrency, convertHandler, valueInput]);

  const selectorsHandler = useCallback(
    (handler: ECurrencies) => (value: string) => {
      const setCurrency = handler === ECurrencies.from ? setFromCurrency : setToCurrency;
      setCurrency(value);
      const params =
        handler === ECurrencies.from
          ? { fromCurr: value, toCurr: toCurrency }
          : { fromCurr: fromCurrency, toCurr: value };
      convertHandler({ value: valueInput, ...params });
    },
    [convertHandler, fromCurrency, toCurrency, valueInput],
  );

  const inputHandler = useCallback(
    (value: number) => convertHandler({ value, toCurr: toCurrency, fromCurr: fromCurrency }),
    [convertHandler, fromCurrency, toCurrency],
  );

  return {
    valueInput,
    fromCurrency,
    toCurrency,
    selectorsHandler,
    revertCoinsHandler,
    result,
    setValueInput,
    inputHandler,
  };
};

export default useConvertCoin;
