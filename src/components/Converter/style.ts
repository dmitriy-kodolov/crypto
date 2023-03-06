import styled from 'styled-components';
import Colors from '@/styles/Colors';

const ConverterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const HeaderName = styled.h1`
  width: 100%;
  padding: 0;
  font-size: 24px;
  margin: 25px 0 10px;
  color: ${Colors.Gray2};
`;

const ErorrMessage = styled.span`
  color: ${Colors.Red};
`;

const Container = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid ${Colors.DarkGray};
`;

export { ConverterWrapper, HeaderName, ErorrMessage, Container };
