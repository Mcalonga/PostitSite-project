import React from 'react'
import { MdSearch } from 'react-icons/md'


const Search = ({handlesearch}) => {
  return (
    <div className='search'>
        <MdSearch className='search-icon'/>
        <input type="text" 
            onChange={(event) => handlesearch(event.target.value)}
        />
    </div>
  )
}

export default Search