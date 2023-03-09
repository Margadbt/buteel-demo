import React from 'react'
import InputComment from '../InputComment'
import style from './style.module.css'

function Comment(props) {
  return (
    <div>
      <div className={style.wrapper}>
        <h1 className={style.username}>{props.data.userId}</h1>
        <p>{props.data.comment}</p>
      </div>
    </div>
  )
}

export default Comment