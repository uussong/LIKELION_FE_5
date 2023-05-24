import React from 'react'

export default function DiaryForm() {
  return (
    <>
      <main class="diary-main">
      <h2 class="heart">2023.02.27의 비밀일기</h2>

      <form>
        <label class="a11y-hidden " for="diary-title">일기 제목</label>
        <input class="input-style" id="diary-title" type="text" placeholder="제목" required />

        <label class="a11y-hidden" for="diary-content">일기 내용</label>
        <textarea class="diary-textarea" id="diary-content" placeholder="오늘의 비밀은 무엇인가요?"></textarea>

        <button class="black-btn" type="submit">작성하기</button>
      </form>
    </main>
    </>
  )
}
