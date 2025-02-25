import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointments from './Pages/MyAppointments'
import Appointment from './Pages/Appointment'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='mx-4 sm:max-[10%]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Doctors' element={<Doctors/>}/>
        <Route path='/Doctors/:Specialty' element={<Doctors/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/My-Profile' element={<MyProfile/>}/>
        <Route path='/My-Appointment' element={<MyAppointments/>}/>
        <Route path='/Appointment/DocID' element={<Appointment/>}/>
      </Routes> 
      <Footer /> 
    </div>
  )
}

export default App