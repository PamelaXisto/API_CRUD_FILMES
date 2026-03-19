import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Buscar filme..."
      className="search-bar"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;