import React from 'react'

export default function Header({ name }) {
  return (
    <header>
      <div>{ name && `${name}님 ` }</div>
    </header>
  )
}
