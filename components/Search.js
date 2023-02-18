import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ comics, setFilteredComics }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const results = comics.filter((comic) => comic.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredComics(results);
  };
  return (
    <div>
      <input placeholder="Search Comics" value={query} onChange={handleChange} />
    </div>
  );
}

Search.propTypes = {
  comics: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  setFilteredComics: PropTypes.func.isRequired,
};

export default Search;
