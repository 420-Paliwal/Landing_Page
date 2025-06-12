import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import GetStarted from './components/GetStarted'
import About from './components/About'
import SocialMedia from './components/SocialMedia'
import Process from './components/Process'
import Customer from './components/Customer'
import Origanization from './components/Origanization'
import Footer from './components/Footer'
import { FormContext } from './components/FormContext';
import DataTable from './components/DataTable'

const App = () => {
  const { setFormData, formData } = useContext(FormContext);
  return (
    <div className='container mx-auto px-4'>
      <Navbar/>
      <GetStarted/>
      <About/>
      <SocialMedia/>
      <Process/>
      <Customer/>
      <Origanization/>
      {formData.length > 0 && <DataTable/>}
      <Footer/>
    </div>
  )
}

export default App