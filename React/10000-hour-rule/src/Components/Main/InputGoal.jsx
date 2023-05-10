import React from 'react'
import '../../style/InputGoal.css'

export default function InputGoal() {
  return (
    <section className='inputGoal'>
      <p className='goal'>
        나는
        <input type="text" placeholder='예)프로그래밍' />
        전문가가 될 것이다.
      </p>
      <p className='goal'>
        그래서 앞으로 매일 하루에
        <input type="number" placeholder='예)5시간' />
        시간씩 훈련할 것이다.
      </p>
      <button className='btnSubmit'>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
    </section>
  )
}
