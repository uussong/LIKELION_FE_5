import React from 'react'

export default function DiaryForm() {
  return (
    <>
      <main className="diary-main">
      <h2 className="heart">2023.02.27의 비밀일기</h2>

      <form>
        <label className="a11y-hidden " htmlFor="diary-title">일기 제목</label>
        <input className="input-style" id="diary-title" type="text" placeholder="제목" required />

        <label className="a11y-hidden" htmlFor="diary-content">일기 내용</label>
        <textarea className="diary-textarea" id="diary-content" placeholder="오늘의 비밀은 무엇인가요?"></textarea>

        <button className="black-btn" type="submit">작성하기</button>
      </form>
    </main>
    </>
  )
}
