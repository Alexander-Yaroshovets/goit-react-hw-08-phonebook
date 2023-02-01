import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Container, Header, Section } from './Layout.styled';

import Loader from '../Loader/Loader';

import Menu from '../Menu/Menu';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <Menu />
        </Container>
      </Header>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
}
