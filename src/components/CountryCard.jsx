// src/components/CountryCard.jsx
import React, { useState } from 'react';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  const [selected, setSelected] = useState(false);

  const handleCardClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`country-card ${selected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <img src={country.flags.svg} alt={country.name.common} />
      <h3>{country.name.common}</h3>
      <p>{country.region}</p>
      {selected && <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>}
    </div>
  );
};

export default CountryCard;
