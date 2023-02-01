import { useSelector } from 'react-redux';

import AuthorizationMenu from '../AuthorizationMenu/AuthorizationMenu';

import UserMenu from '../UserMenu/UserMenu';

import { getIsLoggedIn } from '../../redux/authorization/authorization-selectors';

import { Container, Nav, MenuLink } from './Menu.styled';

export default function Menu() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Nav>
        <MenuLink to="/">Home Page</MenuLink>
        {isLoggedIn && <MenuLink to="contacts">Contacts</MenuLink>}
      </Nav>

      {isLoggedIn ? <UserMenu /> : <AuthorizationMenu />}
    </Container>
  );
}
