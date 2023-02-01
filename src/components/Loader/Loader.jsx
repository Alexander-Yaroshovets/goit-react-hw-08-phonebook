import { Bars } from 'react-loader-spinner';

import { LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <Bars color="#3c1bb3" height={80} width={80} />
    </LoaderContainer>
  );
}
