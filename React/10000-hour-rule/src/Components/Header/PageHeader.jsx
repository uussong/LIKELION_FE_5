import React from 'react'
import title from '../../img/title.png'
import '../../style/PageHeader.css'

export default function PageHeader() {
  return (
    <header>
      <h1 className='title'>
        <img src={title} alt="1만 시간의 법칙" />
      </h1>
    </header>
  )
}
