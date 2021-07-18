import React from 'react'
import ReactDOM from 'react-dom'
import Main from '@pages/main'
import Calendar from '@pages/calendar'
import Sidebar from '@containers/sidebar'
import MainLayout from '@templates/mainLayout'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import '@styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Sidebar />
        <Route path="/" exact component={Main} />
        <Route path="/calendar" component={Calendar} />
        <Redirect path="*" to="/" />
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
