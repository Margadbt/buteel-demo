import React from 'react'
import InputComment from '../InputComment'

function Comment(props) {
  return (
    <div>
      <div className='mt-8 shadow-def rounded-3xl py-5 px-10 border-1 border-card'>
        <h1 className='text-xl font-bold mb-2'>{props.data.userId}</h1>
        <p>{props.data.comment}</p>
      </div>
    </div>
  )
}

export default Comment