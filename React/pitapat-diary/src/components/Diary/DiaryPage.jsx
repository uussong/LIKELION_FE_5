import React from 'react'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList'
import DiaryItem from './DiaryItem'

export default function DiaryPage() {
  return (
    <>
      <DiaryForm />
      <DiaryList>
        <DiaryItem />
      </DiaryList>
    </>
  )
}
