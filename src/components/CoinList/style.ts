import styled from 'styled-components';
import Colors from '../../styles/Colors';

const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: ${Colors.White};
  background-color: ${Colors.LightBlack};
  border-radius: 6px;
  overflow: auto;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${Colors.Gray2};
`;

const TableColumnHeadItem = styled.th`
  height: 40px;
`;

export { Wrapper, TableRow, TableColumnHeadItem };
