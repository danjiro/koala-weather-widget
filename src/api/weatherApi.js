import RequestService from 'services/RequestService';
import config from 'config';
import { filterResponse } from 'utils';

const requestService = new RequestService(config.openweatherApiUrl);

export async function getFiveDayForecastByCity(cityName) {
  const url = `${config.openweatherApiUrl}/forecast?q=${cityName},au&units=metric&appid=${config.openweatherApiKey}`;
  try {
    const response = await requestService.get(url);

    return filterResponse(response);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
}

export async function getFiveDayForecastByCoordinates(latitude, longitude) {
  const url = `${config.openweatherApiUrl}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${config.openweatherApiKey}`;

  try {
    const response = await requestService.get(url);

    return filterResponse(response);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
}
