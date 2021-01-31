// usually would have generic alert component that takes in different
// types of alert severities
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  background-color: #ffbdbd;
  color: ${({ theme }) => theme.palette.error.dark};
  padding: 0 12px;
`;

function ErrorAlert({ message }) {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
}

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorAlert;
