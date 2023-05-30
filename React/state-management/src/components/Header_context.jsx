import React, { useContext } from 'react'
import { UserName } from '../context/nameContext'

export default function Header() {
  const { user } = useContext(UserName)

  return (
    <header>
      <div>{user && `${user}님`}</div>
    </header>
  )
}
