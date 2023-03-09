import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className={style.nav}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link className={style.link} to='/' >Home</Link>
        </li>
        <li>
          <Link className={style.link} to="/category">Category</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav