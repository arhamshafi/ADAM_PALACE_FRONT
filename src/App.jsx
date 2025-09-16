import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'

function App() {

  return (
    <div className='w-full min-h-screen select-none  '>
      <Navbar />
      <Header/>

    </div>
  )
}

export default App