import React from 'react'
import Navbar from './components/Navbar'
import GetStarted from './components/GetStarted'
import About from './components/About'
import SocialMedia from './components/SocialMedia'
import Process from './components/Process'
import Customer from './components/Customer'
import Origanization from './components/Origanization'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='container mx-auto px-4'>
      <Navbar/>
      <GetStarted/>
      <About/>
      <SocialMedia/>
      <Process/>
      <Customer/>
      <Origanization/>
      <Footer/>
    </div>
  )
}

export default App