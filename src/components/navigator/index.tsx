import React, { ReactElement } from 'react'
import { generateKey } from '@utils'
import '@styles/font.scss'
import './index.scss'

interface NavigatorProps {
  items: Array<{
    title: string
    handleClick: () => void
  }>
}

const Navigator = ({ items }: NavigatorProps): ReactElement => {
  return (
    <div className="navigator-wrapper">
      <ul>
        {items.map((item) => (
          <li
            key={generateKey(item.title)}
            className="navigator-item font-24 center"
            onClick={item.handleClick}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigator
