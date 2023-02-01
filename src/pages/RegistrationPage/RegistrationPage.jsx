import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { register } from '../../redux/authorization/authorization-operations';

import {
  Container,
  Form,
  Label,
  LableText,
  LableInfo,
  Input,
  FormButton,
} from './RegistrationPage.styled';

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LableText> Name</LableText>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </Label>

        <Label>
          <LableText>Mail</LableText>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            required
          />
        </Label>

        <Label>
          <LableText>
            Password
            <LableInfo>
              (minimum 7 characters, you entered {password.length})
            </LableInfo>
          </LableText>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            required
            pattern="(?=.*\d).{7,}"
            title="
            The password must contain at least 7 characters, numbers or lowercase letters of the Latin alphabet"
          />
        </Label>

        <FormButton type="submit">Sign up</FormButton>
      </Form>
    </Container>
  );
}
