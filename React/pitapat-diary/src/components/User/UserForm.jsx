import React from 'react'
import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom'

export default function UserForm() {
  return (
    <main>
      <h2 class="img-title">
      <img src={logo} alt="두근두근 비밀 일기" />
      <strong class="line">이름 입력</strong>
    </h2>
      <form class="login">
        <label>이름</label>
        <input type="text" required />
      </form>
        <Link to="/diary">다이어리 쓰러 가기</Link>
    </main>
  )
}
