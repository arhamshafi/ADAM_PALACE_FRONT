import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Section_1 from './Components/Section_1'

function App() {

  return (
    <div className='w-full min-h-screen select-none  '>
      <Navbar />
      <Header/>
      <Section_1/>
    </div>
  )
}

export default App