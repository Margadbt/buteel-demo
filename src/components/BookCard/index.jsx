import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

function BookCard(props) {
  return (
    <div  className={style.bookcard}>
      <Link className={style.link} to={`${props.data.id}`}>
        <div className={style.content}>
          <img className={style.img} src={props.data.img} alt="cover"/>
          <h2 className={style.bookname}>{props.data.name}</h2>
          <p className={style.author}>{props.data.author}</p>
        </div>
      </Link>
    </div>
  )
}

export default BookCard