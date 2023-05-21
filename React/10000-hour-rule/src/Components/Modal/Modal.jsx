import React from 'react'
import licat from '../../img/licat.png'
import '../../style/Modal.css'

export default function Modal({closeModal}) {
  return (
    <article id='modal'>
      <div className='modal-wrap'>
        <p>화이팅!!♥♥♥</p>
        <p>당신의 꿈을 응원합니다!</p>
        <img src={licat} alt="" />
        <button type='button' className='btnClose' onClick={closeModal}>종료하고 진짜 훈련가기 GO!GO!</button>
      </div>
    </article>
  )
}
