import styled from 'styled-components';
import Colors from '@/styles/Colors';
import { ButtonSize } from './UIButton';

type ButtonCssProps = {
  size: ButtonSize;
};

const Button = styled.button<ButtonCssProps>`
  min-width: 34px;
  height: 100%;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: 1px solid ${Colors.Blue};
  border-radius: 6px;
  background: transparent;
  color: inherit;
  font: inherit;

  ${({ size }) =>
    ({
      s: `
      width: 38px;
      height: 38px;
    `,
      m: `
      width: 100px;
      height 38px;
    `,
    }[size])}
`;

export default Button;
