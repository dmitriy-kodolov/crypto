import styled from 'styled-components';
import Link from 'next/link';
import Colors from '@/styles/Colors';

const Wrapper = styled.header`
  background-color: ${Colors.LightBlack};
  padding: 20px;
  width: 100%;
`;

const NavWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? Colors.Blue : Colors.Gray2)};
  text-decoration: none;
  font-size: 16px;
`;

export { Wrapper, NavLink, NavWrapper };
