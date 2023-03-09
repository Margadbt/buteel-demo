import React from 'react'
import SearchBar from '../SearchBar'
import style from './style.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={style.header}>
      <Link className={style.logo} to='/'><h3>Logo</h3></Link>
      <SearchBar />
      <h3>EN</h3>
    </div>
  )
}

export default Header