import React, { ReactElement } from 'react'
import Navigator from '@components/navigator'
import { useHistory } from 'react-router-dom'
import './index.scss'
import '@styles/font.scss'
import { useMemo } from 'react'

const SidebarContainer = (): ReactElement => {
  const history = useHistory()
  const items = useMemo(
    () => [
      {
        title: 'Main',
        handleClick: () => {
          history.push('/')
        },
      },
      {
        title: 'Calendar',
        handleClick: () => {
          history.push('/calendar')
        },
      },
    ],
    [],
  )

  return (
    <div className="sidebar-wrapper">
      <Navigator items={items} />
    </div>
  )
}

export default SidebarContainer
