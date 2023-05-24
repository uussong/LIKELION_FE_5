import React from 'react'
import logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
        <img class="logo" src={logo} alt="두근두근 비밀일기" />
        </Link>
      </h1>
    </header>
  )
}
