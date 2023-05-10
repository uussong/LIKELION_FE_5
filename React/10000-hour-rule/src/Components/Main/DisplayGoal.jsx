import React from 'react'
import '../../style/DisplayGoal.css'

export default function DisplayGoal() {
  return (
    <section>
      <p className='goal'>
        당신은
        <strong></strong>
        전문가가 되기 위해서
      </p>
      <p className='goal'>
        대략
        <strong></strong>
        일 이상 훈련하셔야 합니다! :&#41;
      </p>
      <div className='btnGroup'>
        <button className='btnSubmit'>훈련하러 가기 GO!GO!</button>
        <button className='btnSubmit btnLink'>공유하기</button>
      </div>
    </section>
  )
}
