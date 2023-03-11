import {React} from 'react'
import data from '../../Data/commentdata'
import Comment from '../Comment'
// import InputComment from '../InputComment'

function CommentSection(props) { 

  const filteredData = data.filter( el => props.bookId === el.bookId )
  console.log(filteredData)

  return (
    <div className='mt-20'>
      {/* <InputComment datas={datas} setDatas={setDatas}/> */}
      {filteredData.map( com => 
            <Comment key={com.commentId} data={com} />
       )}
    </div>
  )
}

export default CommentSection