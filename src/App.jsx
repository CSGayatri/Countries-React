import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'

import './App.css'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All')

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SelectMenu selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        </div>
        <CountriesList searchQuery={searchQuery} selectedRegion={selectedRegion} />
      </main>
    </>
  )
}

export default App
