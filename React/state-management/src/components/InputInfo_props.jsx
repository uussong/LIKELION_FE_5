import React from 'react'

export default function InputInfo({ setName }) {
  const getName = (e) => {
    e.preventDefault()
    setName(e.target.value)
    e.target.value = ''
  }
  return (
    <form onSubmit={getName}>
      <h2>이름을 입력하세요</h2>
      <input type='text' onChange={e => e.target.value} />
    </form>
  )
}
