import React, { useContext, useState } from 'react'
import logo from '../../img/logo.svg'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../store/user'


export default function UserForm() {
  const [username, setUsername] = useState('')
  const { setUser } = useContext(UserContext)
  console.log(username)
  const navigate = useNavigate()
  const goDiary = () => {
    navigate('/diary')
  }

  const onChange = e => {
    setUsername(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    setUser(username)
    goDiary()
  }
  return (
    <main>
      <h2 className="img-title">
        <img src={logo} alt="두근두근 비밀 일기" />
        <strong className="line">이름 입력</strong>
      </h2>
      <form className="login" onSubmit={onSubmit}>
        <label>이름</label>
        <input type="text" required value={username} onChange={onChange} />
        <button type='button' onClick={onSubmit}>
          다이어리 쓰러 가기
        </button>
      </form>
    </main>
  )
}
