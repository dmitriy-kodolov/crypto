import { useState, FC } from 'react';
import {
  OptionName,
  SelectContainer,
  SelectedOptionContainer,
  DropDownContainer,
  ArrowIcon,
  SelectOption,
} from './style';
import arrow from '@/assets/icons/arrow.svg';

type SelectProps = {
  current: string;
  setCurrent: (name: string) => void;
  options: { name: string; id: number }[];
};

const UISelect: FC<SelectProps> = ({ options, setCurrent, current }) => {
  const [isRevert, setIsRevert] = useState(false);
  const selectOptionEvent = (name: string) => {
    setCurrent(name);
    setIsRevert((prev) => !prev);
  };

  return (
    <SelectContainer>
      <SelectedOptionContainer onClick={() => setIsRevert((prev) => !prev)}>
        <OptionName>{current}</OptionName>
        <ArrowIcon isRevert={isRevert} src={arrow} alt="select icon" />
      </SelectedOptionContainer>
      {isRevert && (
        <DropDownContainer>
          {options.map(({ name, id }) => (
            <SelectOption onClick={() => selectOptionEvent(name)} key={id}>
              {name}
            </SelectOption>
          ))}
        </DropDownContainer>
      )}
    </SelectContainer>
  );
};

export default UISelect;
