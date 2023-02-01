import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/authorization/authorization-selectors';

import {
  Container,
  Link,
  Text,
  Title,
} from '../../pages/HomePage/HomePage.styleg';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <Container>
          <Title>Welcome to the Phonebook</Title>
          <Text>
            To access your contacts <br />
            please <Link to="/login">Log in</Link>
          </Text>
        </Container>
      )}

      {isLoggedIn && children}
    </>
  );
}
