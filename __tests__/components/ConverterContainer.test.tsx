import { render, screen } from '@testing-library/react';
import getFixture from '__testUtils__/getFixture';
import ConverterContainer from '@/components/ConverterContainer';
import { APICoinInfo } from '@/utils/api/useGetCoins';

describe('Tests for converter', () => {
  const props = getFixture('converterCoins.json') as APICoinInfo;
  it('render component', () => {
    render(<ConverterContainer coins={props} />);
    const input = screen.getByLabelText('converter input');
    expect(input).toBeInTheDocument();
  });
});
