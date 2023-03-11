import React from 'react'
import data from '../../Data/data'
import BookCard from '../BookCard'

function PopularList() {
  return (
    <div>
      <h1 className='my-5 text-2xl font-bold'>Хамгийн эрэлттэй номнууд</h1>
      <div className='grid grid-cols-4'>
        {data.map(data => 
          <BookCard data={data} />
        )}
      </div>
      
    </div>
  )
}

export default PopularList