import React, { useContext } from 'react'
import logo from '../img/logo.svg'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/user'


export default function Header() {
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  const userClear = () => {
    setUser('')
  }
  return (
    <header>
      <h1>
        <Link to="/" onClick={userClear}>
          <img className="logo" src={logo} alt="두근두근 비밀일기" />
        </Link>
      </h1>
      <p>{user && `${user}님`}</p>
    </header>
  )
}