import { CoinInfo } from '@/utils/api/useGetCoins';
import { FC } from 'react';
import CoinItem from '../CoinItem';
import { TableColumnHeadItem, TableRow, Wrapper } from './style';

type CoinListProps = {
  coins: CoinInfo[];
};

const defaultColumns = [
  'Name',
  'Price $',
  'CirculatingSupply $',
  'MarketCap $',
  'Category',
  'From ATH %',
  'To ATH %',
];

const CoinList: FC<CoinListProps> = ({ coins }) => {
  return (
    <Wrapper>
      <thead>
        <TableRow>
          {defaultColumns.map((columnName, index) => (
            <TableColumnHeadItem key={index}>{columnName}</TableColumnHeadItem>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {coins.map(({ category, circulatingSupply, name, id, values, slug }) => (
          <CoinItem
            key={id}
            category={category}
            circulatingSupply={circulatingSupply}
            name={name}
            values={values}
            slug={slug}
            id={id}
          />
        ))}
      </tbody>
    </Wrapper>
  );
};

export default CoinList;
