import React, { useContext, useState } from 'react'
import { UserName } from '../context/nameContext'


export default function InputInfo() {
  const [name, setName] = useState('')
  const {setUser} = useContext(UserName)

  const handleChange = e => setName(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    setUser(name)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type='submit'>입력</button>
      </form>
    </>
  )
}
