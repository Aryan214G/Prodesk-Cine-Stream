import React from 'react'

const SearchBar = ({searchText, setSearchText}) => {
  return (
    <div>
        <input

            type="text"

            placeholder="Search movies..."

            value={searchText}

            onChange={(event) =>

                setSearchText(event.target.value)

            }

        />
        
    </div>
  )
}

export default SearchBar