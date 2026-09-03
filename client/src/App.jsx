import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {GuestLayout,AuthLayout} from './pages/Layout'
import AuthPage from './pages/AuthPage'
import BuilderPage from './pages/BuilderPage'
import HomePage from './pages/HomePage'
import PreviewPage from './pages/PreviewPage'

const App = () => {
  return (
    <Routes>
      {/* Login Routes */}
      <Route element = {<GuestLayout/>}>
        <Route path = '/login' element = {<AuthPage mode = "login"/>}/>
        <Route path = '/registered' element = {<AuthPage mode = "registered"/>}/>
      </Route>

      {/* Protected Routes */}
      <Route element = {<AuthLayout/>}>
        <Route path = '/' element = {<HomePage />}/>
        <Route path = '/builder/:id' element = {<BuilderPage />}/>
        <Route path = '/preview/:id' element = {<PreviewPage />}/>


      </Route>


    </Routes>
  )
}

export default App

