import Colors from '@/styles/Colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 20px;
`;

const ListName = styled.h1`
  width: 100%;
  padding: 0;
  font-size: 24px;
  margin: 25px 0 10px;
  color: ${Colors.Gray2};
`;

const Loading = styled.span`
  color: ${Colors.White};
`;

const ErrorText = styled.span`
  color: ${Colors.Red};
`;

export { Wrapper, ListName, Loading, ErrorText };
