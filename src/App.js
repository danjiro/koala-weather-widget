import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import moment from 'moment';

import Loading from 'components/Loading';
import ErrorAlert from 'components/ErrorAlert';
import WeatherCard from 'components/WeatherCard';
import Search from 'components/Search';
import { getFiveDayForecastByCoordinates, getFiveDayForecastByCity } from 'api/weatherApi';
import GlobalStyles from 'theme/global';
import { lightTheme, darkTheme } from 'theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

function App() {
  // would typically keep custom error messages in a constants file
  const navigatorErrorMessage = 'Unable to get your location. Try searching for a city';
  const [city, setCity] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [theme, setTheme] = useState('light');
  const clearErrorMessage = () => setErrorMessage(null);
  const handleSearchCity = (cityName) => setCity(cityName);
  const toggleTheme = (themeName) => setTheme(themeName);

  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorMessage(navigatorErrorMessage);
    } else {
      // would typically refactor something like this into a util for testability
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => setCoordinates({ latitude: coords.latitude, longitude: coords.longitude }),
        () => setErrorMessage(navigatorErrorMessage),
      );
    }
  }, []);

  useEffect(() => {
    const getForecast = async () => {
      clearErrorMessage();

      try {
        const data = await getFiveDayForecastByCoordinates(
          coordinates.latitude,
          coordinates.longitude,
        );

        setForecastData(data);
      } catch (error) {
        setErrorMessage(error);
      }
    };

    if (coordinates) {
      getForecast();
    }
  }, [coordinates]);

  useEffect(() => {
    const getForecast = async () => {
      clearErrorMessage();

      try {
        const data = await getFiveDayForecastByCity(city);

        setForecastData(data);
      } catch (error) {
        setErrorMessage(error);
      }
    };

    if (city) {
      // set data to null to show loading spinner, should really have
      // isLoading state or something like that
      setForecastData(null);
      getForecast();
    }
  }, [city]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <span
          onClick={() => toggleTheme('light')}
          role="button"
          tabIndex={0}
          onKeyPress={() => toggleTheme('light')}
          css="cursor: pointer"
        >
          Light
        </span>
        <span
          onClick={() => toggleTheme('dark')}
          role="button"
          tabIndex={0}
          onKeyPress={() => toggleTheme('dark')}
          css="cursor: pointer"
        >
          Dark
        </span>
        <h1>Koala Weather Widget</h1>
        <Search onSubmit={handleSearchCity} />
        {errorMessage && <ErrorAlert message={errorMessage} />}
        {!forecastData && !errorMessage && <Loading />}
        {forecastData && (
          <CardContainer>
            {forecastData.list.map((forecast) => (
              <WeatherCard
                key={forecast.dt}
                day={moment(forecast.dt_txt).format('dddd')}
                date={moment(forecast.dt_txt).format('DD MMM YYYY hh:mm A')}
                weather={forecast.weather[0].description}
                temp={forecast.main.temp}
                city={forecastData.city.name}
              />
            ))}
          </CardContainer>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
