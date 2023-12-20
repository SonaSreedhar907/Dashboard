import React from 'react'
import Header from './Header'
import Sidebar from './SideBar'
import Home from './Home'
import './App.css'

function App() {
  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <Home/>
    </div>
  )
}

export default App