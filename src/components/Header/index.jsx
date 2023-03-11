import React from 'react'
import SearchBar from '../SearchBar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between'>
      <Link to='/'><h3 className='text-2xl font-bold'>Logo</h3></Link>
      <SearchBar />
      <h3 className='text-2xl font-bold'>EN</h3>
    </div>
  )
}

export default Header