import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {GuestLayout,AuthLayout} from './pages/Layout'
import AuthPage from './pages/AuthPage'
import BuilderPage from './pages/BuilderPage'
import HomePage from './pages/HomePage'
import PreviewPage from './pages/PreviewPage'
import { Toaster } from 'react-hot-toast'
import PublishModal from './components/PublishModal'
import PublishPage from './pages/PublishPage'

const App = () => {
  return (
    <>
    <Toaster />
    <Routes>
      {/* Login Routes */}
      <Route element = {<GuestLayout/>}>
        <Route path = '/login' element = {<AuthPage mode = "login"/>}/>
        <Route path = '/register' element = {<AuthPage mode = "register"/>}/>
      </Route>

      {/* Protected Routes */}
      <Route element = {<AuthLayout/>}>
        <Route path = '/' element = {<HomePage />}/>
        <Route path = '/builder/:id' element = {<BuilderPage />}/>
        <Route path = '/preview/:id' element = {<PreviewPage />}/>

      {/*public routes*/}
      <Route path = '/publish/:id' element={<PublishPage />}/>
      </Route>

      {/* Catch-all */}
      <Route path = '*' element={<Navigate to="/" replace />}/>

      


    </Routes>
    </>
    
  )
}

export default App

