import { NavLink, Wrapper, NavWrapper } from './style';
import { useRouter } from 'next/router';
import { routes } from '@/constants/pages.consts';

const Header = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <NavWrapper>
        {routes.map(({ title, path, id }) => (
          <NavLink key={id} isActive={router.pathname === path} href={path}>
            {title}
          </NavLink>
        ))}
      </NavWrapper>
    </Wrapper>
  );
};

export default Header;
