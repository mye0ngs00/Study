import React, { ReactElement } from 'react'
import './index.scss'

interface MainLayoutProps {
  children: ReactElement[]
}
const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  return <div className="mainLayout-wrapper">{children}</div>
}

export default MainLayout
