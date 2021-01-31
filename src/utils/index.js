// eslint-disable-next-line import/prefer-default-export
export const filterResponse = (response) => {
  // would ideally clean up the response in the backend to send
  // only what is needed to frontend. Also really quick and dirty way
  // to get 5 day forecast.
  const filteredList = response.data.list.filter((item) => item.dt_txt.includes('12:00:00'));

  return { list: filteredList, city: response.data.city };
};
