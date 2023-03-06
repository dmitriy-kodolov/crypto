import styled from 'styled-components';
import Colors from '@/styles/Colors';

const Wrapper = styled.tr`
  width: 100%;
`;

const CoinField = styled.td<{ isRed?: boolean; isGreen?: boolean }>`
  text-align: center;
  height: 40px;
  ${({ isGreen, isRed }) => `
    color: ${(isGreen && Colors.Green) || (isRed && Colors.Red)}
  `}
`;

export { Wrapper, CoinField };
