import styled from 'styled-components';
import { Loader } from 'react-feather';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const StyledLoader = styled(Loader)`
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading() {
  return (
    <Container>
      <StyledLoader />
    </Container>
  );
}

export default Loading;
