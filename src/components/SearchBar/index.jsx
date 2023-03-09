import React from 'react'
import style from './style.module.css'

function SearchBar() {
  return (
    <div>
      <form>
        <input className={style.input} type="text" placeholder='Ном хайх'/>
      </form>
      
    </div>
  )
}

export default SearchBar