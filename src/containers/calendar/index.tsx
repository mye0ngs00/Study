import React, { ReactElement } from 'react'
import './index.scss'

const CalendarContainer = (): ReactElement => {
  return (
    <div className="calendar-container-wrapper">
      <div> 오늘 날짜: 2021. 07. 19.</div>
      <div>셀렉트 박스</div> ~ <div>셀렉트 박스</div>
      <div>07 JUL</div>
      <div>2021</div>
      <div> grid template으로 7x6 만들고 위에 헤더 별도로 7x1</div>
    </div>
  )
}

export default CalendarContainer
