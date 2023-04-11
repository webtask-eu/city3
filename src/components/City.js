import React from 'react';

const City = ({ name, population, photo, country }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={photo} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Population: {population}</p>
          <p className="card-text">Country: {country}</p>
        </div>
      </div>
    </div>
  );
};

export default City;
