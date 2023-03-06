import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import Button from './style';

const variantSize = ['s', 'm'] as const;

export type ButtonSize = (typeof variantSize)[number];

export type UIButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isDisabled?: boolean;
  size?: ButtonSize;
  children: ReactNode;
};

const UIButton: FC<UIButtonProps> = ({ isDisabled = false, size = 's', children, ...rest }) => {
  return (
    <Button size={size} disabled={isDisabled} {...rest}>
      {children}
    </Button>
  );
};

export default UIButton;
