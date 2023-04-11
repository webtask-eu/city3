import React from 'react';
import City from './City';

const CityList = ({ cities }) => {
  return (
    <div className="row">
      {cities.map(city => (
        <City
          key={city.name}
          name={city.name}
          population={city.population}
          photo={city.photo}
          country={city.country}
        />
      ))}
    </div>
  );
};

export default CityList;
