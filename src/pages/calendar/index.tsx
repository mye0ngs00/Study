import React, { ReactElement } from 'react'
import Calendar from '@containers/calendar'
import Schedule from '@containers/schedule'
import './index.scss'

const CalendarPage = (): ReactElement => {
  return (
    <div className="calendar-page-wrapper">
      <Calendar />
      <Schedule />
    </div>
  )
}

export default CalendarPage
