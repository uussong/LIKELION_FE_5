import React from 'react'

export default function DiaryList({children}) {
  return (
    <section>
      <h2 class="a11y-hidden">일기 목록</h2>
      <ul>
        {children}
      </ul>
    </section>
  )
}
