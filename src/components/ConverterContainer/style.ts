import Image from 'next/image';
import Colors from '@/styles/Colors';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid ${Colors.DarkGray};
`;

const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 240px;
  height: 48px;
  padding: 0px 15px 0px 0px;
  border-radius: 10px;
  border: 1px solid ${Colors.DarkGray};
  color: ${Colors.White};
  background-color: transparent;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 0px 0px 15px;
  font-size: 16px;
  outline: none;
  border: none;
  background: none;
  color: inherit;
  border-radius: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
`;

const ExchangeIcon = styled(Image)`
  width: 14px;
  height: 14px;
`;

const Result = styled.div`
  color: ${Colors.White};
`;

export { Container, ExchangeIcon, Input, InputWrapper, Wrapper, Result };
