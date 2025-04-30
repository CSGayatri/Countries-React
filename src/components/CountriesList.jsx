import React, { useState, useEffect } from 'react'
import CountryCard from './CountryCard'

const CountriesList = ({ searchQuery, selectedRegion }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      setCountries(data)
    }

    fetchCountries()
  }, [])

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <section className="countries-list">
      {filteredCountries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </section>
  )
}

export default CountriesList
