import React from 'react'

function InputComment({datas, setDatas}) {
  const onHandler = (key, value) => {

  }
  return (
    <div>
      <input type='text'  placeholder='put your comment here' />
      <button onClick={ () => onHandler()  }>Submit</button>
    </div>
  )
}

export default InputComment