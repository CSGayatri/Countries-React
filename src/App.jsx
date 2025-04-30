import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SelectMenu from './components/SelectMenu';
import CountriesList from './components/CountriesList';

import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage errors

  useEffect(() => {
    // Fetch country data when the component mounts
    fetch('https://restcountries.com/v3.1/all')  // Replace with your actual API URL
      .then(response => response.json())
      .then(data => {
        setCountries(data);  // Set the fetched data into state
        setLoading(false);    // Set loading to false once data is fetched
      })
      .catch(error => {
        setError(error.message);  // Set error message if the fetch fails
        setLoading(false);        // Set loading to false in case of error
      });
  }, []); // Empty dependency array makes this run once on component mount

  if (loading) {
    return <div>Loading...</div>;  // Show a loading message while fetching
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if there's an error
  }

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
        <CountriesList countries={countries} /> {/* Pass countries data to CountriesList component */}
      </main>
    </>
  );
};

export default App;
