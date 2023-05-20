import React from 'react'
import '../../style/InputGoal.css'
import { useState } from 'react'

export default function InputGoal({ setData }) {
  
  function handleSubmit() {
    const formData = {
      goal: goal,
      time: time
    }
    setData(formData)
  }

  const [goal, setGoal] = useState('')
  const [time, setTime] = useState(null)

  return (
    <section className='inputGoal'>
      <p className='goal'>
        나는
        <input type="text" placeholder='예)프로그래밍' value={goal} onChange={event => setGoal(event.target.value)} />
        전문가가 될 것이다.
      </p>
      <p className='goal'>
        그래서 앞으로 매일 하루에
        <input type="number" placeholder='예)5시간' value={time} onChange={event => setTime(event.target.value)} />
        시간씩 훈련할 것이다.
      </p>
      <button type='submit' className='btnSubmit' onClick={handleSubmit}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
    </section>
  )
}
