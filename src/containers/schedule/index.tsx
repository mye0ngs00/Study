import React, { ReactElement } from 'react'
import Calendar from '@components/calendar'
import './index.scss'
/**
 * 24등분 -> 1 시간, 48등분 -> 30분, 96등분 -> 15분 간격
 */
const ScheduleContainer = (): ReactElement => {
  return (
    <div className="schedule-wrapper">
      <header className="center font-30">Schedule</header>
      <Calendar />
      <button className="add-event-btn" onClick={() => alert('일정 추가')}>
        일정 추가
      </button>
    </div>
  )
}

export default ScheduleContainer
