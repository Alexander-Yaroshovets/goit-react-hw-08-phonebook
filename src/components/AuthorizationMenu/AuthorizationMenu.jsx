import { Container, Link } from './AuthorizationMenu.styled';

export default function AuthorizationMenu() {
  return (
    <Container>
      <Link to="/register">Registration</Link>
      <Link to="/login">Authorization</Link>
    </Container>
  );
}
