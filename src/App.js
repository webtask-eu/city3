import React from 'react';
import CityList from './components/CityList';
import data from './data/cities.json';

function App() {
  return (
    <div>
      <h1>Cities App</h1>
      <CityList cities={data.cities} />
    </div>
  );
}

export default App;
