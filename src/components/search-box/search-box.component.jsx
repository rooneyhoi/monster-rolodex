import './search-box.styles.css';

import React from 'react';

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <div>
      <input
          type="search"
          className="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
    </div>
  )
}
