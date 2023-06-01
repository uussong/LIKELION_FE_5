import React from 'react'
import { useSetRecoilState } from 'recoil'
import userNameState from '../../store/user'

export default function InputInfo() {
  const setUserName = useSetRecoilState(userNameState)
  const getName = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
    e.target.value = ''
  }
  return (
    <form onSubmit={getName}>
      <h2>이름을 입력하세요</h2>
      <input type='text' onChange={e => e.target.value} />
    </form>
  )
}
