import PropTypes from 'prop-types';
import styled from 'styled-components';
import mainTheme from 'theme';

const Container = styled.div`
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border: ${({ theme }) => `
    1px solid ${theme.palette.grey['400']}
  `};
  padding: 24px;
  margin: 8px;
  width: 180px;
  height: auto;

  @media ${mainTheme.device.md} {
    width: 100%;
  }
`;

const DayDateContainer = styled.div`
  margin-bottom: 24px;
`;

const WeatherContainer = styled.div`
  margin-bottom: 24px;
  text-transform: capitalize;
`;

const TempContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const DayText = styled.span`
  display: block;
  font-size: 2rem;
`;

const DateText = styled.span`
  font-size: 0.8rem;
`;

const WeatherText = styled.span`
  font-size: 1.5rem;
`;

const CityText = styled.span`
  font-size: 1.5rem;
`;

const TempText = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

function WeatherCard({ day, date, weather, temp, city }) {
  return (
    <Container>
      <DayDateContainer>
        <DayText>{day}</DayText>
        <DateText>{date}</DateText>
      </DayDateContainer>
      <WeatherContainer>
        <WeatherText>{weather}</WeatherText>
      </WeatherContainer>
      <TempContainer>
        <TempText>{temp}° C</TempText>
      </TempContainer>
      <CityText>{city}</CityText>
    </Container>
  );
}

WeatherCard.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default WeatherCard;
