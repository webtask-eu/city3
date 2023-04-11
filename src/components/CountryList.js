import React from 'react';
import Country from './Country';

const CountryList = ({ countries, onCountrySelect }) => {
  return (
    <div className="list-group">
      {countries.map(country => (
        <button
          key={country.name}
          className="list-group-item list-group-item-action"
          onClick={() => onCountrySelect(country.name)}
        >
          {country.name}
        </button>
      ))}
    </div>
  );
};

export default CountryList;
