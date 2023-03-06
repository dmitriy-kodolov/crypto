import styled from 'styled-components';
import Colors from '@/styles/Colors';
import Image from 'next/image';

type ArrowIconProps = {
  isRevert: boolean;
};

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 100%;
  max-width: 270px;
  height: 38px;
  cursor: pointer;
  border: 1px solid ${Colors.Blue};
  border-radius: 6px;
`;

const SelectedOptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 20px;
`;
const OptionName = styled.span`
  color: ${Colors.White};
`;

const ArrowIcon = styled(Image)<ArrowIconProps>`
  width: 14px;
  height: 14px;
  ${({ isRevert }) =>
    isRevert &&
    `transform: rotate(180deg)
  `}
`;

const DropDownContainer = styled.div`
  width: 100%;
  background: ${Colors.DarkGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: inherit;
  padding: 10px;
  position: absolute;
  top: calc(100% + 5px);
  z-index: 1;
`;

const SelectOption = styled.span`
  height: 20px;
  width: 100%;
  &:hover {
    color: ${Colors.Blue};
  }
`;

export {
  OptionName,
  SelectContainer,
  SelectedOptionContainer,
  DropDownContainer,
  ArrowIcon,
  SelectOption,
};
