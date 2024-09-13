import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './assets/Component/Login'
import Profile from './assets/Component/Profile'

function App() {

  return (
    <UserContextProvider>
      <div className="container">
        <h2>Context API learning</h2>
        <Login />
        <Profile />
      </div>

    </UserContextProvider>
  )
}

export default App
