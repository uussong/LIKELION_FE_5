import React from 'react'
import { useRecoilValue } from 'recoil'
import userNameState from '../../store/user'

export default function Header() {
  const userName = useRecoilValue(userNameState)
  return (
    <header>
      <div>{ userName && `${userName}님 ` }</div>
    </header>
  )
}
