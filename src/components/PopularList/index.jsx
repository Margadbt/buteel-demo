import React from 'react'
import Book from '../BookCard'
import data from '../../Data/data'
import style from './style.module.css'
import BookCard from '../BookCard'

function PopularList() {
  return (
    <div>
      <h1 className={style.title}>Хамгийн эрэлттэй номнууд</h1>
      <div className={style.popularlist}>
        {data.map(data => 
          <BookCard data={data} />
        )}
      </div>
      
    </div>
  )
}

export default PopularList