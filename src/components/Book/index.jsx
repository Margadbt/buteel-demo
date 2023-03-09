import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../Data/data'
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentSection from '../CommentSection'


function Book() {
  const { bookId } = useParams();
  const book = data.find( el => el.id === bookId );
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <img className={style.bookcover} src={book.img} alt="cover"/>
        <div className={style.info}>
          <h1>{book.name}</h1>
          <p className={style.desc}>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industr
            's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled 
            t to make a type specimen book. It has survived not
            only five centuries, but also the leap into electro
            ic typesetting, remaining essentially unchanged. It 
            as popularised in the 1960s with the release of Let
            aset sheets containing Lorem Ipsum passages, and mor
            recently with desktop publishing software like Aldu
            PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className={style.review}>
          <button className={style.button}>Submit</button>
        </div>
      </div>
      <CommentSection bookId={bookId} />
    </div>
  )
}

export default Book