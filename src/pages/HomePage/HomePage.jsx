import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/authorization/authorization-selectors';

import { Container, Title, Text, Link } from './HomePage.styleg';

export default function HomePage() {
  const isLoggedId = useSelector(getIsLoggedIn);
  return (
    <>
      <Container>
        <Title>Welcome to the Phonebook</Title>
        {isLoggedId && <Text>use it with pleasure</Text>}
        {!isLoggedId && (
          <>
            <Text>
              If you are with us for the first time:
              <Link to="/register">complete the registration</Link>
            </Text>
            <Text>
              If you are a regular user:
              <Link to="/login">log in</Link>
            </Text>
          </>
        )}
      </Container>
    </>
  );
}
