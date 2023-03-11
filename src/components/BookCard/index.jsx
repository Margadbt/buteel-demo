import React from 'react'
import { Link } from 'react-router-dom'

function BookCard(props) {
  return (
    <div  className='shadow-def rounded-3xl w-fit border-1 border-card transition ease-out delay-75 hover:scale-105 cursor-pointer'>
      <Link className='no-underline text-black' to={`${props.data.id}`}>
        <div className='p-10'>
          <img className='object-cover w-48 h-72 rounded-2xl' src={props.data.img} alt="cover"/>
          <h2 className='w-48 text-2xl font-bold mt-2.5'>{props.data.name}</h2>
          <p className='m-0 mt-1.5'>{props.data.author}</p>
        </div>
      </Link>
    </div>
  )
}

export default BookCard