import React from 'react'

const SelectMenu = ({ selectedRegion, setSelectedRegion }) => {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <select
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}
      className="region-select"
    >
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  )
}

export default SelectMenu
