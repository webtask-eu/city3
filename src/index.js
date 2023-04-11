import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import cities from './data/cities.json';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('name');

  const handleCountrySelect = country => {
    setSelectedCountry(country);
  };

  const handleSearchChange = term => {
    setSearchTerm(term);
  };

  const handleSortChange = order => {
    setSortOrder(order);
  };

  // Фильтруем города по выбранной стране и по поисковому запросу
  const filteredCities = cities
    .filter(city =>
      selectedCountry ? city.country === selectedCountry : true
    )
    .filter(city =>
      searchTerm
        ? city.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );

  // Сортируем города в соответствии с выбранным порядком
  const sortedCities = [...filteredCities].sort((a, b) =>
    sortOrder === 'name' ? a.name.localeCompare(b.name) : b.population - a.population
  );

  return (
    <div className="container my-5">
      <h1 className="mb-5">Cities App</h1>

      <div className="row">
        <div className="col-md-3">
          <CountryList
            countries={[
              ...new Set(cities.map(city => city.country)),
            ]}
            onCountrySelect={handleCountrySelect}
          />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <SearchBar onSearchChange={handleSearchChange} />
            </div>
            <div className="col-md-6">
              <SortDropdown onSortChange={handleSortChange} />
            </div>
          </div>
          <Country selectedCountry={selectedCountry} />
          <CityList cities={sortedCities} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
