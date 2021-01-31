import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSubmit }) {
  const [city, setCity] = useState(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(city);
      }}
    >
      <input
        type="text"
        label="Search city"
        placeholder="Search city"
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
