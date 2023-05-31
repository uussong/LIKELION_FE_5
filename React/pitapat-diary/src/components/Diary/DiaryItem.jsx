import React from 'react'
import editIcon from '../../img/icon-edit.svg'
import deleteIcon from '../../img/icon-delete.svg'

export default function DiaryItem() {
  return (
    <li>
      <article className="diary-article">
        <h3 className="article-title">이는 청춘의 것은 그들의 운다.</h3>
        <time className="article-time">2023.02.24.THU</time>
        <p className="article-content">
          이는 청춘의 것은 그들의 운다.동산에는 수 것이 있는 뼈 이상의 쓸슬하랴?없으면, 날카로우나 뛰노느 풀이 아니다. 황금시대를 무한한 따뜻한 청춘이 같으며, 속잎나고, 운다. 위하여서 커다란
          영락과따듯한 피고 안고, 뼈 봄바람이다. 가는 곧 아니한 눈에 얼마나 있음으로써 지혜는 대한 얼마나 봄바람이다. 가는 곧 아니한 눈에 얼마나 있음으로써 지혜는 대한 얼마나 봄바람이다. 때가지
          위하여 가지에 열락의 것이다. 그림자는 곷이 천하를 우리 찬미를 원대하고, 인생을 때에, 황금시대다. 목숨을 할지니, 청춘은 용기가 말이다.
        </p>

        <div className="button-group">
          <button type="button"><img src={editIcon} alt="수정" /></button>
          <span></span>
          <button type="button"><img src={deleteIcon} alt="수정" /></button>
        </div>
      </article>
    </li>
  )
}
