import React from 'react'
import { Status } from '../component'

function StatusContainer() {
  return (
    <Status>
      <Status.Box>
        <Status.Img src="https://static.tweaktown.com/news/6/8/68908_63_cyberpunk-2077-enters-final-development-cdprs-still-spending-big.png" />
        {/* 요거는 스탯창 어떻게 해야할지 전혀 감이 안잡힘.... */}
      </Status.Box>
      <Status.History>
        <h2>StatusHistory test (주석달아둠!)</h2>
        {/* 요것도 todo list 처럼 동그란 점 찍고 완료한 리스트 나열해서 적을지 고민. */}
      </Status.History>
    </Status>
  )
}

export default StatusContainer
