import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import "./header.css"

const Header = () => {
  return (
     <header>
        <h1>User List</h1>
        <SearchBar/>
     </header>
  )
}

export default Header