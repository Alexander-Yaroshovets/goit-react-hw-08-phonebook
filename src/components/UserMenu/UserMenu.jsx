import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import {
  getUserEmail,
  getUserName,
} from '../../redux/authorization/authorization-selectors';

import { logOut } from '../../redux/authorization/authorization-operations';

import { Container, UserInfoTitle, Button } from './UserMenu.styled';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <UserInfoTitle>
          Hello {userName} || your mail : {userEmail}
        </UserInfoTitle>
        <Button
          type="button"
          onClick={() => {
            dispatch(logOut());
            navigate('/');
          }}
        >
          log out
        </Button>
      </Container>
    </>
  );
}
