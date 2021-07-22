import { generateKey, pad } from '@utils'
import React, { ReactElement } from 'react'
import './index.scss'

const CalendarPage = (): ReactElement => {
  let pointer = {
    startAt: -1,
    endAt: -1,
    content: '',
  }
  const CalendarList = [
    {
      startAt: 8,
      endAt: 12,
      content: 'asd',
    },
    {
      startAt: 13,
      endAt: 14,
      content: '321321',
    },
    {
      startAt: 34,
      endAt: 91,
      content: '23213',
    },
  ]

  return (
    <div className="calendar-component-wrapper">
      <table>
        {Array.apply(0, new Array(96))
          .map((_, idx) => idx)
          .map((item) => {
            const els = CalendarList.filter((el) => el.startAt === item)
            const hours = (item * 15) / 60
            const minutes = (item * 15) % 60
            const label_time =
              (item + 1) % 4 === 1
                ? React.createElement(
                    'td',
                    { rowSpan: 4 },
                    `${pad(hours, 2)}:${pad(minutes, 2)}`,
                  )
                : ''
            if (pointer.endAt >= item) {
              return <tr key={generateKey('schedule')}>{label_time}</tr>
            }
            if (!els.length) {
              return (
                <tr key={generateKey('schedule')}>
                  {label_time}
                  <td></td>
                </tr>
              )
            }
            const current = els[0]
            pointer = { ...current }
            return (
              <tr key={generateKey('schedule')}>
                {label_time}
                <td
                  rowSpan={pointer.endAt - pointer.startAt + 1}
                  className="plan"
                >
                  {pointer.content}
                </td>
              </tr>
            )
          })}
      </table>
    </div>
  )
}

export default CalendarPage
