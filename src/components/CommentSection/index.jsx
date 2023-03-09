import {React} from 'react'
import style from './style.module.css'
import data from '../../Data/commentdata'
import Comment from '../Comment'
// import InputComment from '../InputComment'

function CommentSection(props) { 

  const filteredData = data.filter( el => props.bookId === el.bookId )
  console.log(filteredData)

  // const [datas, setDatas] = useState({
  //   "commentId": "",
  //   "userId": "",
  //   "comment": "",
  //   "star": "",
  //   "bookId": ""
  // })

  return (
    <div className={style.commentSection}>
      {/* <InputComment datas={datas} setDatas={setDatas}/> */}
      {filteredData.map( com => 
            <Comment key={com.commentId} data={com} />
       )}
    </div>
  )
}

export default CommentSection